import React from "react";
import { useMenuTheme } from "../hooks/useMenuTheme";
import ThemeOne from "./themes/ThemeOne";
import ThemeTwo from "./themes/ThemeTwo";
import ThemeThree from "./themes/ThemeThree";
import ThemeFour from "./themes/ThemeFour";

const MenuPreview = () => {
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

  return (
    <div className="top-[5%] sticky right-0">
      <div className="relative flex flex-col items-center justify-center w-full max-h-screen overflow-hidden">
        <div className="flex flex-col max-w-full max-h-full gap-4 overflow-auto">
          <button className="bg-primary hover:scale-95 hover:bg-primary/90 self-center w-full px-4 py-2 text-center text-white transition rounded-full">
            Publish
          </button>

          <div className="relative border-black dark:border-black bg-black border-[14px] rounded-[2.5rem] w-[280px] max-w-full">
            <div className="rounded-[2rem] scrollbar-hide w-full h-[452px] bg-white dark:bg-black overflow-y-scroll">
              {/* Theme content */}
              {selectedTheme === 1 && (
                <ThemeOne
                  selectedBgColor={selectedBgColor}
                  selectedHeader={selectedHeader}
                  selectedLayout={selectedLayout}
                  selectedPrimaryColor={selectedPrimaryColor}
                  selectedSecondaryColor={selectedSecondaryColor}
                  selectedTheme={selectedTheme}
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
