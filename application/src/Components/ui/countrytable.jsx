// // src/components/CountryTable.js

// const CountryTable = () => {
//   const data = [
//     { country: 'Afghanistan', code: 4, region: 'Asia', idCard: true, passport: false, driverLicense: false },
//     { country: 'Åland Islands', code: 248, region: 'Europe', idCard: false, passport: false, driverLicense: false },
//     { country: 'Albania', code: 8, region: 'Europe', idCard: false, passport: false, driverLicense: false },
//     { country: 'Algeria', code: 12, region: 'Africa', idCard: false, passport: false, driverLicense: false },
//     { country: 'American Samoa', code: 16, region: 'Australia and Oceania', idCard: false, passport: false, driverLicense: false },
//     { country: 'Andorra', code: 20, region: 'Europe', idCard: false, passport: false, driverLicense: true },
//     { country: 'Angola', code: 24, region: 'Africa', idCard: false, passport: false, driverLicense: false },
//     { country: 'Anguilla', code: 660, region: 'Caribbean', idCard: false, passport: false, driverLicense: false },
//   ];

//   return (
//     <div className="container mx-auto my-8">
//       <table className="min-w-full border-collapse block md:table">
//         <thead className="block md:table-header-group">
//           <tr className="border border-gray-200 md:border-none block md:table-row">
//             <th className="bg-gray-200 p-2 text-left md:table-cell">Country</th>
//             <th className="bg-gray-200 p-2 text-left md:table-cell">Code</th>
//             <th className="bg-gray-200 p-2 text-left md:table-cell">Region</th>
//             <th className="bg-gray-200 p-2 text-left md:table-cell">ID Card</th>
//             <th className="bg-gray-200 p-2 text-left md:table-cell">Passport</th>
//             <th className="bg-gray-200 p-2 text-left md:table-cell">Driver License</th>
//           </tr>
//         </thead>
//         <tbody className="block md:table-row-group">
//           {data.map((item, index) => (
//             <tr key={index} className="border border-gray-200 md:border-none block md:table-row">
//               <td className="p-2 text-left md:table-cell">{item.country}</td>
//               <td className="p-2 text-left md:table-cell">{item.code}</td>
//               <td className="p-2 text-left md:table-cell">{item.region}</td>
//               <td className="p-2 text-left md:table-cell"><input type="checkbox" checked={item.idCard} readOnly /></td>
//               <td className="p-2 text-left md:table-cell"><input type="checkbox" checked={item.passport} readOnly /></td>
//               <td className="p-2 text-left md:table-cell"><input type="checkbox" checked={item.driverLicense} readOnly /></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="mt-4 flex justify-between items-center">
//         <span>1 - 20 of 250</span>
//         <div className="space-x-2">
//           <button className="px-3 py-1 border rounded">1</button>
//           <button className="px-3 py-1 border rounded">2</button>
//           <button className="px-3 py-1 border rounded">3</button>
//           <button className="px-3 py-1 border rounded">4</button>
//           <button className="px-3 py-1 border rounded">5</button>
//           <button className="px-3 py-1 border rounded">6</button>
//           <button className="px-3 py-1 border rounded">7</button>
//           <button className="px-3 py-1 border rounded">...</button>
//           <button className="px-3 py-1 border rounded">13</button>
//         </div>
//         <span>Results per page: 20</span>
//       </div>
//     </div>
//   );
// };

// export default CountryTable;



// src/components/CountryTable.js

const CountryTable = () => {
  const data = [
    { country: 'Afghanistan', code: 4, region: 'Asia', idCard: true, passport: false, driverLicense: false },
    { country: 'Åland Islands', code: 248, region: 'Europe', idCard: false, passport: false, driverLicense: false },
    { country: 'Albania', code: 8, region: 'Europe', idCard: false, passport: false, driverLicense: false },
    { country: 'Algeria', code: 12, region: 'Africa', idCard: false, passport: false, driverLicense: false },
    { country: 'American Samoa', code: 16, region: 'Australia and Oceania', idCard: false, passport: false, driverLicense: false },
    { country: 'Andorra', code: 20, region: 'Europe', idCard: false, passport: false, driverLicense: true },
    { country: 'Angola', code: 24, region: 'Africa', idCard: false, passport: false, driverLicense: false },
    { country: 'Anguilla', code: 660, region: 'Caribbean', idCard: false, passport: false, driverLicense: false },
  ];

  return (
    <div className="container mx-auto my-8">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-200 md:border-none block md:table-row">
            <th className="bg-gray-200 p-2 text-left md:table-cell">Country</th>
            <th className="bg-gray-200 p-2 text-left md:table-cell">Code</th>
            <th className="bg-gray-200 p-2 text-left md:table-cell">Region</th>
            <th className="bg-gray-200 p-2 text-left md:table-cell">ID Card</th>
            <th className="bg-gray-200 p-2 text-left md:table-cell">Passport</th>
            <th className="bg-gray-200 p-2 text-left md:table-cell">Driver License</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {data.map((item, index) => (
            <tr key={index} className="border border-gray-200 md:border-none block md:table-row">
              <td className="p-2 text-left md:table-cell">{item.country}</td>
              <td className="p-2 text-left md:table-cell">{item.code}</td>
              <td className="p-2 text-left md:table-cell">{item.region}</td>
              <td className="p-2 text-left md:table-cell"><input type="checkbox" checked={item.idCard} readOnly /></td>
              <td className="p-2 text-left md:table-cell"><input type="checkbox" checked={item.passport} readOnly /></td>
              <td className="p-2 text-left md:table-cell"><input type="checkbox" checked={item.driverLicense} readOnly /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
        <span className="mb-2 md:mb-0">1 - 20 of 250</span>
        <div className="space-x-2 mb-2 md:mb-0">
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
          <button className="px-3 py-1 border rounded">4</button>
          <button className="px-3 py-1 border rounded">5</button>
          <button className="px-3 py-1 border rounded">6</button>
          <button className="px-3 py-1 border rounded">7</button>
          <button className="px-3 py-1 border rounded">...</button>
          <button className="px-3 py-1 border rounded">13</button>
        </div>
        <span>Results per page: 20</span>
      </div>
    </div>
  );
};

export default CountryTable;
