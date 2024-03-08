"use client";

import { Oval } from "react-loader-spinner";

const UiLoader = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <Oval height="36" width="36" color="white" ariaLabel="loading" />
    </div>
  );
};

export default UiLoader;
