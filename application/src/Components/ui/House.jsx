// import { useRef, useState, useEffect } from "react";
// import { Switch } from "@/Components/ui/switch";
// import { Label } from "@/Components/ui/label";
// import { FiCheck, FiX } from "react-icons/fi";

// const House = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [apiKeys, setApiKeys] = useState([]);
//   const [permissions, setPermissions] = useState([]);
//   const formRef = useRef(null);

//   const handleClickOutside = (event) => {
//     if (formRef.current && !formRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   const toggleForm = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isOpen]);

//   const generateRandomKey = () => {
//     return Math.random().toString(36).substr(2, 10);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newKey = generateRandomKey();
//     const newPermissions = [...permissions];
//     newPermissions.push({
//       key: newKey,
//       allowCrossDeviceJourney1: permissions.includes("cross-device-journey-1"),
//       allowCrossDeviceJourney2: permissions.includes("cross-device-journey-2"),
//       isEnabled: true,
//     });
//     setPermissions(newPermissions);
//     setApiKeys([...apiKeys, newKey]);
//     setIsOpen(false);
//   };

//   const toggleEnableDisable = (key) => {
//     const updatedPermissions = permissions.map((perm) =>
//       perm.key === key ? { ...perm, isEnabled: !perm.isEnabled } : perm
//     );
//     setPermissions(updatedPermissions);
//   };

//   const handlePermissionToggle = (event) => {
//     const { id, checked } = event.target;
//     if (checked && !permissions.includes(id)) {
//       setPermissions([...permissions, id]);
//     } else if (!checked && permissions.includes(id)) {
//       const updatedPermissions = permissions.filter((perm) => perm !== id);
//       setPermissions(updatedPermissions);
//     }
//   };

//   return (
//     <>
//       <button
//         className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//         onClick={toggleForm}
//       >
//         Generate new API token
//       </button>
//       {isOpen && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm overflow-y-auto h-full flex justify-center items-center">
//           <div
//             ref={formRef}
//             className="bg-white rounded-lg shadow-lg p-4 w-full max-w-sm md:max-w-md"
//           >
//             <h2 className="text-xl sm:text-lg font-medium text-center mb-4">
//               Generate new API token
//             </h2>
//             <p className="text-gray-600 mb-4 sm:text-base text-center">
//               Select the permissions of new token. One permission must be
//               selected.
//             </p>
//             <hr />
//             <form onSubmit={handleSubmit}>
//               <div className="space-y-10 pt-8">
//                 <div className="flex items-center mb-2 justify-between">
//                   <Label htmlFor="cross-device-journey-1">
//                     Initialize
//                   </Label>
//                   <Switch
//                     id="cross-device-journey-1"
//                     onChange={handlePermissionToggle}
//                   />
//                 </div>

//                 <div className="flex items-center mb-2 justify-between">
//                   <Label htmlFor="cross-device-journey-2">
//                     Retrieve & Delete
//                   </Label>
//                   <Switch
//                     id="cross-device-journey-2"
//                     onChange={handlePermissionToggle}
//                   />
//                 </div>
//               </div>
            
//               <div className="flex mt-4 justify-between pt-5">
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-2"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 >
//                   Initialize
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       <div className="mt-8">
//         <h3 className="text-lg font-medium mb-4">Generated API Keys</h3>
//         {apiKeys.length === 0 ? (
//           <p>No API keys generated yet.</p>
//         ) : (
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr>
//                 <th className="border-b py-2">API Key</th>
//                 <th className="border-b py-2">Initialize</th>
//                 <th className="border-b py-2">Retrieve & Delete</th>
//                 <th className="border-b py-2">Activity</th>
//               </tr>
//             </thead>
//             <tbody>
//               {apiKeys.map((key, index) => {
//                 const permission = permissions.find((perm) => perm.key === key);
//                 return (

//                   <tr key={index}>
//                     <td className="border-b py-2">{key}</td>

//                     <td className="border-b py-2">
//                       {permission && (
//                         <>
//                           <FiCheck
//                             className={`text-green-500 ${
//                               permission.allowCrossDeviceJourney1
//                                 ? "visible"
//                                 : "invisible"
//                             }`}
//                           />
//                           <div className="flex items-center">
//                           <FiX
//                             className={`text-red-500 ${
//                               permission.allowCrossDeviceJourney1
//                                 ? "invisible"
//                                 : "visible"
//                             }`}
//                           />
                         
//                           </div>
//                           <br />
                         
//                           <FiCheck
//                             className={`text-green-500 ${
//                               permission.allowCrossDeviceJourney2
//                                 ? "visible"
//                                 : "invisible"
//                             }`}
//                           />
//                           <div className="flex items-center">
//                           <FiX
//                             className={`text-red-500 ${
//                               permission.allowCrossDeviceJourney2
//                                 ? "invisible"
//                                 : "visible"
//                             }`}
//                           />
                         
//                           </div>
                          
//                         </>
//                       )}
//                     </td>
//                     <td className="border-b py-2">
//                       {permission && (
//                         <>
//                           <FiCheck
//                             className={`text-green-500 ${
//                               permission.allowCrossDeviceJourney1
//                                 ? "visible"
//                                 : "invisible"
//                             }`}
//                           />
//                           <div className="flex items-center">
//                           <FiX
//                             className={`text-red-500 ${
//                               permission.allowCrossDeviceJourney1
//                                 ? "invisible"
//                                 : "visible"
//                             }`}
//                           />
//                           </div>

//                           <br />

//                           <FiCheck
//                             className={`text-green-500 ${
//                               permission.allowCrossDeviceJourney2
//                                 ? "visible"
//                                 : "invisible"
//                             }`}
//                           />
//                           <div className="flex items-center">
//                           <FiX
//                             className={`text-red-500 ${
//                               permission.allowCrossDeviceJourney2
//                                 ? "invisible"
//                                 : "visible"
//                             }`}
//                           />
//                           </div>
//                         </>
//                       )}
//                     </td>

//                     <td className="border-b py-2">
//                       <button
//                         className={`px-3 py-1 rounded-md text-white ${
//                           permission.isEnabled
//                             ? "bg-green-500 hover:bg-green-700"
//                             : "bg-gray-400 hover:bg-gray-600"
//                         }`}
//                         onClick={() => toggleEnableDisable(key)}
//                       >
//                         {permission.isEnabled ? "Enabled" : "Disabled"}
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </>
//   );
// };

// export default House;



import { useRef, useState, useEffect } from "react";
import { Switch } from "@/Components/ui/switch";
import { Label } from "@/Components/ui/label";
import { FiCheck, FiX } from "react-icons/fi";

const House = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKeys, setApiKeys] = useState([]);
  const [permissions, setPermissions] = useState([]);
  const formRef = useRef(null);

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const generateRandomKey = () => {
    return Math.random().toString(36).substr(2, 10);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newKey = generateRandomKey();
    const newPermissions = [...permissions];
    newPermissions.push({
      key: newKey,
      allowCrossDeviceJourney1: permissions.includes("cross-device-journey-1"),
      allowCrossDeviceJourney2: permissions.includes("cross-device-journey-2"),
      isEnabled: true,
    });
    setPermissions(newPermissions);
    setApiKeys([...apiKeys, newKey]);
    setIsOpen(false);
  };

  const toggleEnableDisable = (key) => {
    const updatedPermissions = permissions.map((perm) =>
      perm.key === key ? { ...perm, isEnabled: !perm.isEnabled } : perm
    );
    setPermissions(updatedPermissions);
  };

  const handlePermissionToggle = (event) => {
    const { id, checked } = event.target;
    if (checked && !permissions.includes(id)) {
      setPermissions([...permissions, id]);
    } else if (!checked && permissions.includes(id)) {
      const updatedPermissions = permissions.filter((perm) => perm !== id);
      setPermissions(updatedPermissions);
    }
  };

  return (
    <>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        onClick={toggleForm}
      >
        Generate new API token
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm overflow-y-auto h-full flex justify-center items-center">
          <div
            ref={formRef}
            className="bg-white rounded-lg shadow-lg p-4 w-full max-w-sm md:max-w-md"
          >
            <h2 className="text-xl sm:text-lg font-medium text-center mb-4">
              Generate new API token
            </h2>
            <p className="text-gray-600 mb-4 sm:text-base text-center">
              Select the permissions of the new token. One permission must be selected.
            </p>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="space-y-10 pt-8">
                <div className="flex items-center mb-2 justify-between">
                  <Label htmlFor="cross-device-journey-1">
                    Initialize
                  </Label>
                  <Switch
                    id="cross-device-journey-1"
                    onChange={handlePermissionToggle}
                  />
                </div>

                <div className="flex items-center mb-2 justify-between">
                  <Label htmlFor="cross-device-journey-2">
                    Retrieve & Delete
                  </Label>
                  <Switch
                    id="cross-device-journey-2"
                    onChange={handlePermissionToggle}
                  />
                </div>
              </div>
            
              <div className="flex mt-4 justify-between pt-5">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-2"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Initialize
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-lg font-medium mb-4">Generated API Keys</h3>
        {apiKeys.length === 0 ? (
          <p>No API keys generated yet.</p>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2">API Key</th>
                <th className="border-b py-2">Initialize</th>
                <th className="border-b py-2">Retrieve & Delete</th>
                <th className="border-b py-2">Activity</th>
              </tr>
            </thead>
            <tbody>
              {apiKeys.map((key, index) => {
                const permission = permissions.find((perm) => perm.key === key);
                return (
                  <tr key={index}>
                    <td className="border-b py-2">{key}</td>

                    <td className="border-b py-2">
                      {permission && (
                        <>
                          <FiCheck
                            className={`text-green-500 ${
                              permission.allowCrossDeviceJourney1
                                ? "visible"
                                : "invisible"
                            }`}
                          />
                          <FiX
                            className={`text-red-500 ${
                              permission.allowCrossDeviceJourney1
                                ? "invisible"
                                : "visible"
                            }`}
                          />
                        </>
                      )}
                    </td>
                    
                    <td className="border-b py-2">
                      {permission && (
                        <>
                          <FiCheck
                            className={`text-green-500 ${
                              permission.allowCrossDeviceJourney2
                                ? "visible"
                                : "invisible"
                            }`}
                          />
                          <FiX
                            className={`text-red-500 ${
                              permission.allowCrossDeviceJourney2
                                ? "invisible"
                                : "visible"
                            }`}
                          />
                        </>
                      )}
                    </td>

                    <td className="border-b py-2">
                      <button
                        className={`px-3 py-1 rounded-md text-white ${
                          permission.isEnabled
                            ? "bg-green-500 hover:bg-green-700"
                            : "bg-gray-400 hover:bg-gray-600"
                        }`}
                        onClick={() => toggleEnableDisable(key)}
                      >
                        {permission.isEnabled ? "Enabled" : "Disabled"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default House;