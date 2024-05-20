import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "../MenuItems/MenuItems";

function Tab({
  categories,
  dishes,
  setSelectedTab,
  selectedTab,
  resto,
  publishedTheme,
}) {
  return (
    <div style={{ backgroundColor: publishedTheme.selectedBgColor }}>
      <div className="tabs-container pl-4 overflow-x-auto">
        <div className="flex gap-4">
          <div className="rounded-xl relative inline-block border border-gray-300 shadow-md">
            <div
              className={`tab flex items-center w-[90px] justify-center h-9 pl-1.5 pr-2.5 font-semibold rounded-[8px] cursor-pointer transition-colors ${
                selectedTab === "All"
                  ? "bg-primary-blue text-white"
                  : "hover:bg-primary-blue hover:text-white"
              }`}
              onClick={() => setSelectedTab("All")}
            >
              <h2 className="text-[14px] mb-0">All</h2>
            </div>
          </div>
          {categories.length > 0 &&
            categories.map((item) => (
              <div
                key={item.id}
                className="rounded-xl relative inline-block border border-gray-300 shadow-md"
              >
                <div
                  onClick={() => setSelectedTab(item.name)}
                  className={`tab flex items-center  px-[35px] w-full justify-center h-9  font-semibold rounded-[8px] cursor-pointer transition-colors ${
                    selectedTab === item.name
                      ? "bg-primary-blue text-white"
                      : "hover:bg-primary-blue hover:text-white"
                  }`}
                >
                  <h2 className="text-[14px] mb-0 whitespace-nowrap">
                    {item.name}
                  </h2>
                </div>
              </div>
            ))}
        </div>
      </div>

      <MenuItems
        dishes={
          dishes.length > 0 &&
          dishes.filter(
            (dish) =>
              selectedTab === "All" || dish.categorie.name === selectedTab
          )
        }
        restoId={resto}
        selectedTab={selectedTab}
      />
    </div>
  );
}

export default Tab;
