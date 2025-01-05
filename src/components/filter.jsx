import { useContext, useState } from "react";
import { Appcontext } from "../App";

export default function Filter({ clothes, chouse, items }) {
  const { itemsFilter, setitemsFilter } = useContext(Appcontext);
  return (
    <div className="font-sans p-4 my-7">
      <ul className="flex bg-gray-100">
        <li
          onClick={() => setitemsFilter((itemsFilter) => "All")}
          id="profileTab"
          className={`tab  font-bold tracking-wide w-full text-center text-base ${
            itemsFilter == "All" ? "bg-purple-500 text-white" : ""
          } py-3 px-6 cursor-pointer`}
        >
          All
        </li>
        <li
          onClick={() => setitemsFilter((itemsFilter) => clothes)}
          id="homeTab"
          className={`tab  font-bold tracking-wide w-full text-center text-base ${
            itemsFilter == clothes ? "bg-purple-500 text-white" : ""
          } py-3 px-6 cursor-pointer`}
        >
          {clothes}
        </li>
        <li
          onClick={() => setitemsFilter((itemsFilter) => chouse)}
          id="settingTab"
          className={`tab  font-bold tracking-wide w-full text-center text-base ${
            itemsFilter == chouse ? "bg-purple-500 text-white" : ""
          } py-3 px-6 cursor-pointer`}
        >
          {chouse}
        </li>
        <li
          onClick={() => setitemsFilter((itemsFilter) => items)}
          id="profileTab"
          className={`tab  font-bold tracking-wide w-full text-center text-base ${
            itemsFilter == items ? "bg-purple-500 text-white" : ""
          } py-3 px-6 cursor-pointer`}
        >
          {items}
        </li>
      </ul>
    </div>
  );
}
