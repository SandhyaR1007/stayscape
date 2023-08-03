import React from "react";
import { propertyTypes } from "../../data.js";

const Categories = () => {
  return (
    <div className="p-5 flex gap-2 items-center w-screen   fixed ">
      {propertyTypes.map((data) => (
        <section
          key={data?.id}
          className="px-8 max-w-fit whitespace-nowrap flex flex-col items-center  text-gray-400 font-semibold gap-2 cursor-pointer  "
        >
          <img src={data?.logo} alt={data?.type} className="w-6" />
          <span className="text-xs pb-2 border-b-2 border-transparent transition-all hover:border-gray-200">
            {data?.type}
          </span>
        </section>
      ))}
    </div>
  );
};

export default Categories;
