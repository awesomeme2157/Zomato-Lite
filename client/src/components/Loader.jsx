import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-20 h-20 border-t-4 border-b-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
