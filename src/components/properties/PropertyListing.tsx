import React from "react";
import { airbnbData } from "../../data.js";

const PropertyListing = () => {
  return (
    <div className="grid gap-5 grid-cols-4 pt-48 px-5">
      {airbnbData.map((data) => (
        <section className="mb-10">
          <div className="h-[90%]">
            <img
              src={data?.images[0]}
              alt=""
              className="w-full h-full rounded-xl object-cover shadow-md"
            />
          </div>
          <div className="h-1/3">
            <p>{data?.location}</p>
            <p>{data?.type}</p>
            <p>{data?.price}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default PropertyListing;
