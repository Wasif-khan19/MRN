import React from 'react'

const CustomizeClient = () => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Customer Header Logo
        </label>
        <div className="flex items-center justify-between">
          <img src="jumio-logo-url" alt="Customer Header Logo" className="max-w-xs max-h-24"/>
          <button className="bg-blue-500 text-white py-1 px-4 rounded">Select image</button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Success Image
        </label>
        <div className="flex items-center justify-between">
          <img src="success-image-url" alt="Success Image" className="max-w-xs max-h-60"/>
          <button className="bg-blue-500 text-white py-1 px-4 rounded">Select image</button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Error Image
        </label>
        <div className="flex items-center justify-between">
          <img src="error-image-url" alt="Error Image" className="max-w-xs max-h-24"/>
          <button className="bg-blue-500 text-white py-1 px-4 rounded">Select image</button>
        </div>
      </div>
    </div>
  )
}

export default CustomizeClient