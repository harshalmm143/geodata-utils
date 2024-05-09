const data = require('./data.json')

function getAllStates() {
    return data.map(entry => entry.state)
}

function getAllDistrictsByState(stateName) {
    const state = data.find(entry => entry.state === stateName);
    if (!state) return [];
    return state.districts.map(district => district.district);
}

function getSubDistrictsByDistrict(stateName, districtName) {
    const stateEntry = data.find(entry => entry.state === stateName);
    if (!stateEntry || !stateEntry.districts) {
        console.log(`No districts found for state: ${stateName}`);
        return [];
    }
    const district = stateEntry.districts.find(district => district.district === districtName);
    if (!district) {
        console.log(`No district found with name: ${districtName}`);
        return [];
    }
    return district.subDistricts.map(subDistrict => subDistrict.subDistrict);
}
function getVillagesBySubDistrict(stateName, districtName, subDistrictName) {
    const district = data
        .find(entry => entry.state === stateName)
        .districts.find(district => district.district === districtName);

    if (!district || !district.subDistricts) {
        console.log(`No sub-districts found for state: ${stateName}, district: ${districtName}`);
        return [];
    }

    const subDistrict = district.subDistricts.find(subDistrict => subDistrict.subDistrict === subDistrictName);
    if (!subDistrict) {
        console.log(`No sub-district found with name: ${subDistrictName}`);
        return [];
    }

    return subDistrict.villages;
}

module.exports = {
    getAllStates,
    getAllDistrictsByState,
    getSubDistrictsByDistrict,
    getVillagesBySubDistrict
}
