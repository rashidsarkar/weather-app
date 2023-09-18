import React, { useRef } from "react";

const SarchFild = ({ setCity }) => {
  const input = useRef();
  return (
    <>
      <div className="p-4 mb-4 rounded-md custom-card">
        {/* Location input */}
        <input
          ref={input}
          id="locationInput"
          type="text"
          className="w-full p-2 border rounded-md"
          placeholder="Enter location..."
        />
        {/* Search button */}
        <button
          id="searchButton"
          onClick={() => {
            setCity(input.current.value);
          }}
          className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-md"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SarchFild;
