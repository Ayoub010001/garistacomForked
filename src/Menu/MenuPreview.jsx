import React, { useState, useEffect, useCallback } from "react";
import { useMenuTheme } from "../hooks/useMenuTheme";
import { usePublishedTheme } from "../hooks/usePublishedTheme";
import ThemeOne from "./themes/ThemeOne";
import ThemeTwo from "./themes/ThemeTwo";
import ThemeThree from "./themes/ThemeThree";
import ThemeFour from "./themes/ThemeFour";
import { APIURL } from "../../lib/ApiKey";
import { getRestaurantSlug } from "../Theme/lib/utils";
import toast from "react-hot-toast";

const MenuPreview = () => {
  const [, setPublishedTheme] = usePublishedTheme();
  const [isPublished, setIsPublished] = useState(false);
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const restaurantSlug = getRestaurantSlug();
  // get selected menu themes
  const [
    {
      selectedBgColor,
      selectedHeader,
      selectedLayout,
      selectedPrimaryColor,
      selectedSecondaryColor,
      selectedTheme,
    },
  ] = useMenuTheme();

  const publishTheme = () => {
    setPublishedTheme({
      selectedBgColor,
      selectedHeader,
      selectedLayout,
      selectedPrimaryColor,
      selectedSecondaryColor,
      selectedTheme,
    });

    setIsPublished(true);

    setTimeout(() => {
      setIsPublished(false);
    }, 1000);
  };

  // fetch restaurant info
  const getRestaurantInfo = useCallback(async (url, id) => {
    try {
      const response = await fetch(`${APIURL}/api/${url}/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const categories = await getRestaurantInfo(
        "getCategorieByResto",
        restaurantSlug.id
      );
      const dishes = await getRestaurantInfo("getdishes", restaurantSlug.id);
      const drinks = await getRestaurantInfo("getdrinks", restaurantSlug.id);
      const restoInfo = await getRestaurantInfo("infos", restaurantSlug.id);

      setRestaurantInfo({
        categories: [{ name: "All", id: 0 }, ...categories],
        products: [...dishes, ...drinks],
        restoInfo: restoInfo[0],
      });
    };
    fetchData();
  }, [getRestaurantInfo, restaurantSlug.id]);

  return (
    <div className="top-[5%] sticky right-0">
      <div className="relative flex flex-col items-center justify-center w-full max-h-screen overflow-hidden">
        <div className="flex flex-col max-w-full max-h-full gap-4 overflow-auto">
          <button
            onClick={publishTheme}
            className="bg-primary hover:scale-95 hover:bg-primary/90 self-center w-full px-4 py-2 text-center text-white transition rounded-full"
          >
            {isPublished ? "Changes published" : "Publish"}
          </button>

          <div className="relative border-black dark:border-black bg-black border-[14px] rounded-[2rem] w-[280px] max-w-full">
            <div className="rounded-[1rem] scrollbar-hide w-full h-[480px] bg-white dark:bg-black overflow-y-scroll">
              {/* Theme content */}
              {selectedTheme === 1 && (
                <ThemeOne
                  selectedBgColor={selectedBgColor}
                  selectedHeader={selectedHeader}
                  selectedLayout={selectedLayout}
                  selectedPrimaryColor={selectedPrimaryColor}
                  selectedSecondaryColor={selectedSecondaryColor}
                  selectedTheme={selectedTheme}
                  restaurantInfo={restaurantInfo}
                />
              )}

              {selectedTheme === 2 && (
                <ThemeTwo
                  selectedBgColor={selectedBgColor}
                  selectedHeader={selectedHeader}
                  selectedLayout={selectedLayout}
                  selectedPrimaryColor={selectedPrimaryColor}
                  selectedSecondaryColor={selectedSecondaryColor}
                  selectedTheme={selectedTheme}
                />
              )}

              {selectedTheme === 3 && (
                <ThemeThree
                  selectedBgColor={selectedBgColor}
                  selectedHeader={selectedHeader}
                  selectedLayout={selectedLayout}
                  selectedPrimaryColor={selectedPrimaryColor}
                  selectedSecondaryColor={selectedSecondaryColor}
                  selectedTheme={selectedTheme}
                />
              )}

              {selectedTheme === 4 && (
                <ThemeFour
                  selectedBgColor={selectedBgColor}
                  selectedHeader={selectedHeader}
                  selectedLayout={selectedLayout}
                  selectedPrimaryColor={selectedPrimaryColor}
                  selectedSecondaryColor={selectedSecondaryColor}
                  selectedTheme={selectedTheme}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPreview;
