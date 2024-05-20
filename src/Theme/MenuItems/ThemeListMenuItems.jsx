import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelectedPublishedTheme } from "../../hooks/usePublishedTheme";
import { Button } from "@/components/ui/button";
import { APIURL } from "../../../lib/ApiKey";

const ThemeListMenuItems = ({ setSelectedItem, placeholderImage, item }) => {
  const { selectedPrimaryColor, selectedSecondaryColor, selectedBgColor } =
    useSelectedPublishedTheme();
  return (
    <div
      onClick={() => setSelectedItem(item)}
      className="group items-center justify-center h-full w-full overflow-hidden p-1.5 text-lg font-semibold rounded-[8px] cursor-pointer transition-colors"
    >
      <div className="group grid items-start grid-cols-2 place-items-end gap-5 ps-2">
        <div className="w-full">
          <div className="flex flex-col gap-3 text-start">
            {/* Item Name */}
            <h2
              style={{ color: `${selectedSecondaryColor}` }}
              className="text-lg"
            >
              {item.name.length > 20
                ? item.name.slice(0, 20) + "..."
                : item.name}
            </h2>

            {/* Item Price */}

            <p
              style={{ color: `${selectedSecondaryColor}` }}
              className="text-2xl font-semibold opacity-80"
            >
              {item.price}
            </p>

            {/* Add to cart */}
            <button
              type="button"
              style={{
                backgroundColor: selectedPrimaryColor,
                color: selectedBgColor,
              }}
              className="leading-0 w-full px-2 py-2 mt-auto flex items-center justify-center rounded-[8px]"
            >
              <AiOutlinePlus
                style={{
                  color: selectedBgColor,
                }}
              />
            </button>
          </div>
        </div>

        <div className="w-[150px] h-[150px] bg-black/50 group-hover:bg-black/70 rounded-lg border border-gray-200">
          <img
            src={`${APIURL}/storage/${item.image}` || placeholderImage}
            alt="Category"
            className="group-hover:scale-105 object-cover w-full h-full transition rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeListMenuItems;
