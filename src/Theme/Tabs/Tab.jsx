import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "../MenuItems/MenuItems";
import { useSelectedPublishedTheme } from "../../hooks/usePublishedTheme";

function Tab({ categories, dishes, setSelectedTab, selectedTab, resto }) {
  // Get the selected published theme
  const { selectedBgColor, selectedPrimaryColor, selectedSecondaryColor } =
    useSelectedPublishedTheme();

  // Tab Hover Effect
  const handleHoverActive = (e) => {
    e.currentTarget.style.backgroundColor = selectedPrimaryColor;
    e.currentTarget.style.color = selectedBgColor;
  };

  // Tab Hover Effect
  const handleHoverInactive = (e) => {
    e.currentTarget.style.backgroundColor = "";
    e.currentTarget.style.color = selectedSecondaryColor;
  };

  return (
    <div style={{ backgroundColor: selectedBgColor }}>
      {/* Categories */}
      <div className="tabs-container pl-4 overflow-x-auto">
        <div className="flex gap-3 items-center scrollbar-hide overflow-x-scroll pe-5">
          <div className="rounded-xl relative inline-block border border-gray-300 shadow-md">
            <div
              style={{
                backgroundColor:
                  selectedTab === "All" ? selectedPrimaryColor : "",
                color:
                  selectedTab === "All"
                    ? selectedBgColor
                    : selectedSecondaryColor,
              }}
              className={`flex items-center w-[90px] justify-center h-9 pl-1.5 pr-2.5 font-semibold rounded-[8px] cursor-pointer transition-colors`}
              onClick={() => setSelectedTab("All")}
              onMouseOver={selectedTab !== "All" && handleHoverActive}
              onMouseOut={selectedTab !== "All" && handleHoverInactive}
            >
              <h2 className="text-sm mb-0">All</h2>
            </div>
          </div>
          {categories.length > 0 && (
            <div className="gap-2 flex items-center">
              {categories.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center w-[90px] justify-center h-9 pl-1.5 pr-2.5 font-semibold rounded-[8px] cursor-pointer transition-colors  border border-gray-300 shadow-md`}
                  style={{
                    backgroundColor:
                      item.name === selectedTab ? selectedPrimaryColor : "",
                    color:
                      item.name === selectedTab
                        ? selectedBgColor
                        : selectedSecondaryColor,
                  }}
                  onClick={() => setSelectedTab(item.name)}
                  onMouseOver={item.name !== selectedTab && handleHoverActive}
                  onMouseOut={item.name !== selectedTab && handleHoverInactive}
                >
                  <p className="text-xs font-medium">{item.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Menu Items */}
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
