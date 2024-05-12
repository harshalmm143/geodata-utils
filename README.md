# India-GeoData GeoData-utils, State, District, Sub-District, and Village Data Utility




This npm package provides a collection of utility functions designed to simplify the retrieval of geographical data, specifically information about states, districts, sub-districts, and villages. The package is designed to work with a JSON dataset, allowing users to easily access various levels of geographical information within their applications.

With the provided functions, users can seamlessly retrieve lists of states, districts within a specific state, sub-districts within a district, and villages within a sub-district, district, and state. These functions are designed to streamline the process of accessing and managing geographical data, making it easier for developers to integrate location-based features into their applications.

Whether you're building a web application, mobile app, or any other project that requires geographical data, geodata-utils offers a simple and efficient solution for managing and accessing location information. By abstracting away the complexities of data retrieval, developers can focus on building robust and feature-rich applications without getting bogged down by the intricacies of geographical data management.

![screen-captureonline-video-cutter com-ezgif com-video-to-gif-converter](https://github.com/harshalmm143/geodata-utils/assets/102899317/5d837f5e-2fc1-4b0d-81f8-d31c61aae526)

## Installation

You can install geodata-utils via npm by running the following command in your React project directory:

```bash
  npm install  geodata-utils
```

## Usage

```javascript
import React, { useState } from "react";
import {
  useFetchStates,
  useFetchDistrictsByState,
  useFetchSubDistrictsByDistrict,
  useFetchVillagesBySubDistrict,
} from "geodata-utils";

const CheckLocation = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSubDistrict, setSelectedSubDistrict] = useState("");
  const [selectedVillage, setSelectedVillage] = useState("");
  const states = useFetchStates();
  const districts = useFetchDistrictsByState(selectedState);
  const subDistricts = useFetchSubDistrictsByDistrict(
    selectedState,
    selectedDistrict
  );
  const villages = useFetchVillagesBySubDistrict(
    selectedState,
    selectedDistrict,
    selectedSubDistrict
  );

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict("");
    setSelectedSubDistrict("");
    setSelectedVillage("");
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setSelectedSubDistrict("");
    setSelectedVillage("");
  };

  const handleSubDistrictChange = (event) => {
    setSelectedSubDistrict(event.target.value);
    setSelectedVillage("");
  };

  const handleVillageChange = (event) => {
    setSelectedVillage(event.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="states">Select a state:</label>
        <select id="states" onChange={handleStateChange} value={selectedState}>
          <option value="">Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="districts">Select a district:</label>
        <select
          id="districts"
          onChange={handleDistrictChange}
          value={selectedDistrict}
        >
          <option value="">Select District</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="subDistricts">Select a sub-district:</label>
        <select
          id="subDistricts"
          onChange={handleSubDistrictChange}
          value={selectedSubDistrict}
        >
          <option value="">Select Sub-District</option>
          {subDistricts.map((subDistrict, index) => (
            <option key={index} value={subDistrict}>
              {subDistrict}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="villages">Select a village:</label>
        <select
          id="villages"
          onChange={handleVillageChange}
          value={selectedVillage}
        >
          <option value="">Select Village</option>
          {villages.map((village, index) => (
            <option key={index} value={village}>
              {village}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CheckLocation;
```

## API

`useFetchStates()`

Returns an array of all states.

`useFetchDistrictsByState(stateName)`

Returns an array of all districts in the specified state.

`stateName`: Name of the state as a string.

`useFetchSubDistrictsByDistrict(stateName, districtName)`

Returns an array of all sub-districts in the specified district and state.

`stateName`: Name of the state as a string.
`districtName`: Name of the district as a string.

`useFetchVillagesBySubDistrict(stateName, districtName, subDistrictName)`

Returns an array of all villages in the specified sub-district, district, and state.

`stateName`: Name of the state as a string.
`districtName`: Name of the district as a string.
`subDistrictName`: Name of the sub-district as a string.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the GitHub repository: geodata-utils.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries or support, you can reach out to the project maintainers via harshalmm143@gmail.com.

## Authors

- [@harshalmm143](https://www.github.com/harshalmm143)

```

```
