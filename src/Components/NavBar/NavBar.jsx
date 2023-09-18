import React from "react";

const NavBar = () => {
  return (
    <>
      <header className="flex items-center justify-between p-4 text-white bg-blue-500">
        <h1 className="text-2xl font-bold">Weather Dashboard</h1>
        <div className="flex space-x-4">
          {/* Optional navigation icons (e.g., settings, help) */}
          <span className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2zm0 8h2v2h-2z" />
            </svg>
          </span>
        </div>
      </header>
    </>
  );
};

export default NavBar;
