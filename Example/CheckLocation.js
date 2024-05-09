// CheckLocation.js
import React, { useState } from 'react';
import { getAllStates, getAllDistrictsByState, getSubDistrictsByDistrict, getVillagesBySubDistrict } from 'geodata-utils';
import "./CheckLocation.css";

const CheckLocation = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedSubDistrict, setSelectedSubDistrict] = useState('');
    const [selectedVillage, setSelectedVillage] = useState('');
    const [villages, setVillages] = useState([]);

    const states = getAllStates();
    const districts = getAllDistrictsByState(selectedState);
    const subDistricts = getSubDistrictsByDistrict(selectedState, selectedDistrict);

    const handleStateChange = (event) => {
        const selectedState = event.target.value;
        setSelectedState(selectedState);
        setSelectedDistrict('');
        setSelectedSubDistrict('');
        setSelectedVillage('');
        setVillages([]);
    };

    const handleDistrictChange = (event) => {
        const selectedDistrict = event.target.value;
        setSelectedDistrict(selectedDistrict);
        setSelectedSubDistrict('');
        setSelectedVillage('');
        setVillages([]);
    };

    const handleSubDistrictChange = (event) => {
        const selectedSubDistrict = event.target.value;
        setSelectedSubDistrict(selectedSubDistrict);
        setSelectedVillage('');
        const villages = getVillagesBySubDistrict(selectedState, selectedDistrict, selectedSubDistrict);
        setVillages(villages);
    };

    const handleVillageChange = (event) => {
        const selectedVillage = event.target.value;
        setSelectedVillage(selectedVillage);
    };

    return (
        <div className="check-location-container">
            <div className='form-wrapper'>
                <div>
                    <label className="check-location-label" htmlFor="state">State: </label>
                    <select className="check-location-select" id="state" onChange={handleStateChange} value={selectedState}>
                        <option value="">Select State</option>
                        {states.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="check-location-label" htmlFor="district">District: </label>
                    <select className="check-location-select" id="district" onChange={handleDistrictChange} value={selectedDistrict}>
                        <option value="">Select District</option>
                        {districts.map((district, index) => (
                            <option key={index} value={district}>{district}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="check-location-label" htmlFor="subDistrict">Sub-District: </label>
                    <select className="check-location-select" id="subDistrict" onChange={handleSubDistrictChange} value={selectedSubDistrict}>
                        <option value="">Select Sub-District</option>
                        {subDistricts.map((subDistrict, index) => (
                            <option key={index} value={subDistrict}>{subDistrict}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="check-location-label" htmlFor="village">Village: </label>
                    <select className="check-location-select" id="village" onChange={handleVillageChange} value={selectedVillage}>
                        <option value="">Select Village</option>
                        {villages.map((village, index) => (
                            <option key={index} value={village}>{village}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="selected-wapper">
                <p className="selected-location-item">Selected Location:</p>
                <div className="selected-location">
                    <p className="selected-location-item">State:<br></br> {selectedState}</p>
                    <p className="selected-location-item">District: <br></br> {selectedDistrict}</p>
                    <p className="selected-location-item">Sub-District: <br></br> {selectedSubDistrict}</p>
                    <p className="selected-location-item">Village: <br></br> {selectedVillage}</p>
                </div>
            </div>
        </div >
    );
};

export default CheckLocation;
