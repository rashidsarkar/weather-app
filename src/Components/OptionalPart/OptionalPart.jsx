import React, { useState } from "react";

const OptionalPart = () => {
  // Define state variables for the checkbox values
  const [unitConversionChecked, setUnitConversionChecked] = useState(false);
  const [backgroundImageChecked, setBackgroundImageChecked] = useState(false);

  // Define functions to handle checkbox changes
  const handleUnitConversionChange = () => {
    setUnitConversionChecked(!unitConversionChecked);
  };

  const handleBackgroundImageChange = () => {
    setBackgroundImageChecked(!backgroundImageChecked);
  };

  return (
    <div>
      <div>
        {/* Optional controls */}
        <div className="p-4 bg-gray-200 rounded-md custom-card">
          <h2 className="mb-2 text-lg font-semibold">Optional Controls</h2>
          <div className="flex items-center space-x-4">
            <label htmlFor="unitConversion" className="text-sm">
              Unit Conversion:
            </label>
            <input
              id="unitConversion"
              type="checkbox"
              className="w-4 h-4 text-blue-500 form-checkbox"
              onChange={handleUnitConversionChange}
              checked={unitConversionChecked}
            />
            <span className="text-sm">Celsius / Fahrenheit</span>
          </div>
          <div className="flex items-center mt-2 space-x-4">
            <label htmlFor="backgroundImageToggle" className="text-sm">
              Dynamic Background Image:
            </label>
            <input
              id="backgroundImageToggle"
              type="checkbox"
              className="w-4 h-4 text-blue-500 form-checkbox"
              onChange={handleBackgroundImageChange}
              checked={backgroundImageChecked}
            />
            <span className="text-sm">Enable / Disable</span>
          </div>
        </div>

        {/* Error handling */}
        <div
          id="errorContainer"
          className="p-4 mt-4 text-center text-red-500 rounded-md custom-card"
        >
          {/* Display error message here */}
        </div>

        {/* Footer */}
        <footer className="p-2 text-center text-white bg-gray-500">
          &copy; 2023 Weather Dashboard
        </footer>
      </div>
    </div>
  );
};

export default OptionalPart;
