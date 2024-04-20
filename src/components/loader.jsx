import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-transparent">
      <div className="w-20 h-20 border-2 border-opacity-40 border-black border-t-blue-300 rounded-full animate-spin">
      </div>
    </div>
  );
}

export default Loader;
