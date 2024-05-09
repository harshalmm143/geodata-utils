# GeoDataKit, State, District, Sub-District, and Village Data Utility

This npm package provides a collection of utility functions designed to simplify the retrieval of geographical data, specifically information about states, districts, sub-districts, and villages. The package is designed to work with a JSON dataset, allowing users to easily access various levels of geographical information within their applications.

With the provided functions, users can seamlessly retrieve lists of states, districts within a specific state, sub-districts within a district, and villages within a sub-district, district, and state. These functions are designed to streamline the process of accessing and managing geographical data, making it easier for developers to integrate location-based features into their applications.

Whether you're building a web application, mobile app, or any other project that requires geographical data, geodata-utils offers a simple and efficient solution for managing and accessing location information. By abstracting away the complexities of data retrieval, developers can focus on building robust and feature-rich applications without getting bogged down by the intricacies of geographical data management.



![image](https://github.com/harshalmm143/geodata-utils/assets/102899317/ab4b53d1-4ed1-4d30-8462-d93c578cb42f)




## Installation

You can install geodata-utils via npm by running the following command in your React project directory:

```bash
  npm install  geodata-utils
```

## API

`getAllStates()`

Returns an array of all states.

`getAllDistrictsByState(stateName)`

Returns an array of all districts in the specified state.

`stateName`: Name of the state as a string.

`getSubDistrictsByDistrict(stateName, districtName)`

Returns an array of all sub-districts in the specified district and state.

`stateName`: Name of the state as a string.
`districtName`: Name of the district as a string.

`getVillagesBySubDistrict(stateName, districtName, subDistrictName)`

Returns an array of all villages in the specified sub-district, district, and state.

`stateName`: Name of the state as a string.
`districtName`: Name of the district as a string.
`subDistrictName`: Name of the sub-district as a string.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request on the GitHub repository: react-native-app-header.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries or support, you can reach out to the project maintainers via harshalmm143@gmail.com.

## Authors

- [@harshalmm143](https://www.github.com/harshalmm143)
