import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelectedPublishedTheme } from "../../hooks/usePublishedTheme";
import { APIURL } from "../../../lib/ApiKey";

const ThemeListMenuItems = ({ setSelectedItem, placeholderImage, item }) => {
  const { selectedPrimaryColor, selectedSecondaryColor, selectedBgColor } =
    useSelectedPublishedTheme();
  return (
    <div
      onClick={() => setSelectedItem(item)}
      className="group items-center justify-center h-full w-full overflow-hidden p-1.5 text-lg font-semibold rounded-[8px] cursor-pointer transition-colors"
    >
      <div className="group place-items-end ps-2 grid items-start grid-cols-2 gap-5">
        <div className="w-full">
          <div className="text-start flex flex-col gap-3">
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
              className="opacity-80 text-2xl font-semibold"
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
