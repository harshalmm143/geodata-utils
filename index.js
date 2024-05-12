import React, { useState, useEffect } from 'react';
import axios from 'axios';

const URL = "https://harshalmm143.github.io/india-geodata-api/data.json";

// Centralized error handling function
const handleError = (error) => {
    console.error(error);
    return [];
};

// Fetch data from API with caching
const fetchData = async () => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        return handleError(error);
    }
};

// Custom hook to fetch data with caching
export const useFetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDataWithCache = async () => {
            const cachedData = await fetchData();
            setData(cachedData);
        };
        fetchDataWithCache();
    }, []);

    return data;
};

// Custom hook to fetch states
export const useFetchStates = () => {
    const [states, setStates] = useState([]);

    useEffect(() => {
        const fetchStates = async () => {
            const data = await fetchData();
            const uniqueStates = [...new Set(data.map(entry => entry.state))];
            setStates(uniqueStates);
        };
        fetchStates();
    }, []);

    return states;
};


// Custom hook to fetch districts by state
export const useFetchDistrictsByState = (selectedState) => {
    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        const fetchDistricts = async () => {
            if (selectedState) {
                const data = await fetchData();
                const stateData = data.find(entry => entry.state === selectedState);
                const districtNames = stateData ? stateData.districts.map(district => district.district) : [];
                setDistricts(districtNames);
            } else {
                setDistricts([]);
            }
        };
        fetchDistricts();
    }, [selectedState]);

    return districts;
};



// Custom hook to fetch sub-districts by district
export const useFetchSubDistrictsByDistrict = (selectedState, selectedDistrict) => {
    const [subDistricts, setSubDistricts] = useState([]);

    useEffect(() => {
        const fetchSubDistricts = async () => {
            if (selectedState && selectedDistrict) {
                try {
                    const response = await axios.get(URL);
                    const data = response.data;

                    const stateEntry = data.find(entry => entry.state === selectedState);
                    if (!stateEntry || !stateEntry.districts) {
                        console.log(`No districts found for state: ${selectedState}`);
                        setSubDistricts([]);
                        return;
                    }

                    const district = stateEntry.districts.find(district => district.district === selectedDistrict);
                    if (!district) {
                        console.log(`No district found with name: ${selectedDistrict}`);
                        setSubDistricts([]);
                        return;
                    }

                    setSubDistricts(district.subDistricts.map(subDistrict => subDistrict.subDistrict));
                } catch (error) {
                    console.error(error);
                    setSubDistricts([]);
                }
            } else {
                setSubDistricts([]);
            }
        };
        fetchSubDistricts();
    }, [selectedState, selectedDistrict]);

    return subDistricts;
};


// Custom hook to fetch villages by sub-district
export const useFetchVillagesBySubDistrict = (selectedState, selectedDistrict, selectedSubDistrict) => {
    const [villages, setVillages] = useState([]);

    useEffect(() => {
        const fetchVillages = async () => {
            if (selectedState && selectedDistrict && selectedSubDistrict) {
                try {
                    const response = await axios.get(URL);
                    const data = response.data;

                    const district = data
                        .find(entry => entry.state === selectedState)
                        .districts.find(district => district.district === selectedDistrict);

                    if (!district || !district.subDistricts) {
                        console.log(`No sub-districts found for state: ${selectedState}, district: ${selectedDistrict}`);
                        setVillages([]);
                        return;
                    }

                    const subDistrict = district.subDistricts.find(subDistrict => subDistrict.subDistrict === selectedSubDistrict);
                    if (!subDistrict) {
                        console.log(`No sub-district found with name: ${selectedSubDistrict}`);
                        setVillages([]);
                        return;
                    }

                    setVillages(subDistrict.villages);
                } catch (error) {
                    console.error(error);
                    setVillages([]);
                }
            } else {
                setVillages([]);
            }
        };
        fetchVillages();
    }, [selectedState, selectedDistrict, selectedSubDistrict]);

    return villages;
};


