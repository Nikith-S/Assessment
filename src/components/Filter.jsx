// import React, { useState } from 'react';

// const Filter = ({ vehicles }) => {
//   const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

//   // Function to filter vehicles by year
//   const handleFilter = (event) => {
//     const year = event.target.value;
//     if (year) {
//       const filtered = vehicles.filter(vehicle => vehicle.year === parseInt(year));
//       setFilteredVehicles(filtered);
//     } else {
//       setFilteredVehicles(vehicles); // Clear filter
//     }
//   };

//   return (
//     <div>
//       <h1>Vehicles List</h1>
//       <select onChange={handleFilter}>
//         <option value="">All Years</option>
//         <option value="2020">2020</option>
//         <option value="2021">2021</option>
//         <option value="2022">2022</option>
//       </select>

//       <ul>
//         {filteredVehicles.map(vehicle => (
//           <li key={vehicle.id}>
//             {vehicle.model} - {vehicle.year}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Filter;