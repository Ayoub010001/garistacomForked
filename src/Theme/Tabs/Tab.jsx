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
    e.currentTarget.style.border = `1px solid ${selectedPrimaryColor}`;
  };

  // Tab Hover Effect
  const handleHoverInactive = (e) => {
    e.currentTarget.style.backgroundColor = "";
    e.currentTarget.style.color = selectedSecondaryColor;
    e.currentTarget.style.border = "";
  };

  return (
    <div style={{ backgroundColor: selectedBgColor }}>
      {/* Categories */}
      <div className="tabs-container flex flex-col items-center pl-4 overflow-x-auto">
        <div className="scrollbar-hide flex items-center gap-3 px-5 overflow-x-scroll">
          <div className="relative inline-block border border-gray-300 rounded-full shadow-md">
            <div
              style={{
                backgroundColor:
                  selectedTab === "All" ? selectedPrimaryColor : "",
                color:
                  selectedTab === "All"
                    ? selectedBgColor
                    : selectedSecondaryColor,
                border:
                  selectedTab === "All"
                    ? `1px solid ${selectedPrimaryColor}`
                    : "",
              }}
              className={`flex items-center w-[90px] justify-center h-9 pl-1.5 pr-2.5 font-semibold rounded-full cursor-pointer transition-colors  border border-gray-300 shadow-md`}
              onClick={() => setSelectedTab("All")}
              onMouseOver={selectedTab !== "All" && handleHoverActive}
              onMouseOut={selectedTab !== "All" && handleHoverInactive}
            >
              <h2 className="text-xs font-medium">All</h2>
            </div>
          </div>
          {categories.length > 0 && (
            <div className="flex items-center gap-2">
              {categories.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center w-[90px] justify-center h-9 pl-1.5 pr-2.5 font-semibold rounded-full cursor-pointer transition-colors  border border-gray-300 shadow-md`}
                  style={{
                    backgroundColor:
                      item.name === selectedTab ? selectedPrimaryColor : "",
                    color:
                      item.name === selectedTab
                        ? selectedBgColor
                        : selectedSecondaryColor,
                    border:
                      selectedTab === item.name
                        ? `1px solid ${selectedPrimaryColor}`
                        : "",
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
