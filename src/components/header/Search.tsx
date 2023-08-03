import React from "react";

const Search = () => {
  return (
    <div className="py-2 px-1 flex items-center gap-3 border shadow-md rounded-full">
      <section className="ps-3 text-sm text-gray-700 tracking-wide font-semibold">
        Anywhere
      </section>
      <section className=" text-sm border-x px-3 text-gray-700 tracking-wide font-semibold">
        Any week
      </section>
      <section className="pe-3 flex justify-between items-center ">
        <span className="pe-3 text-sm text-gray-500 tracking-wide font-semibold">
          Add guests
        </span>
        <span className="p-2 rounded-full bg-emerald-400 text-[0.67rem] ">
          🔍
        </span>
      </section>
    </div>
  );
};

export default Search;
