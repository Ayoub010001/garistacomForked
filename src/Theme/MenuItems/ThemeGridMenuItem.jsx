import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelectedPublishedTheme } from "../../hooks/usePublishedTheme";
import { Button } from "@/components/ui/button";
import { APIURL } from "../../../lib/ApiKey";

const ThemeGridMenuItem = ({ setSelectedItem, placeholderImage, item }) => {
  const { selectedPrimaryColor, selectedSecondaryColor, selectedBgColor } =
    useSelectedPublishedTheme();
  return (
    <div
      onClick={() => setSelectedItem(item)}
      className="group items-center justify-center h-full w-full overflow-hidden p-1.5 text-lg font-semibold rounded-[8px] cursor-pointer transition-colors"
    >
      <img
        src={`${APIURL}/storage/${item.image}` || placeholderImage}
        alt="Menu Icon"
        className="w-full group-hover:scale-105 transition object-cover rounded-[10px] h-32"
      />
      <div
        style={{ color: selectedSecondaryColor }}
        className="flex items-center justify-between px-1 py-2 gap-2"
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-base">
            {item.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
          </h2>

          <p className="text-sm text-start">{item.price}</p>
        </div>

        <button
          type="button"
          style={{
            backgroundColor: selectedPrimaryColor,
            color: selectedBgColor,
          }}
          className="leading-0 w-fit p-1 flex items-center justify-center rounded-[8px]"
        >
          <AiOutlinePlus
            style={{
              color: selectedBgColor,
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default ThemeGridMenuItem;
