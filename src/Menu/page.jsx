import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ColorPicker } from "primereact/colorpicker";
import { backgroundColors, menuItems } from "./constants";
import { useMenuTheme } from "../hooks/useMenuTheme";
import { Check, X } from "lucide-react";
import "./page.css";
import MenuPreview from "./MenuPreview";

export default function Menu() {
  // get selected menu themes
  const [menuTheme, setMenuTheme] = useMenuTheme();

  // destructure the selected items from the menu theme object
  const {
    selectedBgColor,
    selectedHeader,
    selectedLayout,
    selectedPrimaryColor,
    selectedSecondaryColor,
    selectedTheme,
    selectedCustomColor,
  } = menuTheme;

  const [customColor, setCustomColor] = useState("");

  return (
    <>
      <div className="md:flex scrollbar-hide flex-col hidden">
        <div className="flex-1 p-8 pt-6 space-y-4">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Menu</h2>
          </div>

          <div className="gap-x-8 flex items-start justify-between">
            <Tabs defaultValue="themes" className="w-full">
              <TabsList className="gap-x-4 grid w-full grid-cols-2">
                <TabsTrigger value="themes">Themes</TabsTrigger>
                <TabsTrigger value="customization">Customization</TabsTrigger>
              </TabsList>

              {/* Themes Tabs */}
              <TabsContent value="themes">
                {/* Theme Selection */}
                <div className="mt-8">
                  <div className="flex flex-col">
                    <h1 className="text-lg font-medium">Theme Picker</h1>
                    <p className="text-gray-500 text-[15px] font-medium">
                      Select your preferred theme to personalize your
                      experience.
                    </p>
                  </div>

                  <div className="lg:grid-cols-2 place-items-center grid grid-cols-1 grid-rows-2 gap-4 mt-6">
                    {menuItems["theme"].map(({ id, imageClass }) => {
                      // get currently selected theme
                      const isThemeSelected = id === selectedTheme;
                      return (
                        <div
                          key={id}
                          onClick={() =>
                            setMenuTheme({ ...menuTheme, selectedTheme: id })
                          }
                          className={`"overflow-hidden outline outline-[2px] ${
                            isThemeSelected ? `outline-black` : "outline-muted"
                          } border-[8px] border-white w-full h-[200px] rounded-[1px] hover:bg-bottom transition-all ease-in-out duration-700 ${imageClass} cursor-pointer`}
                        ></div>
                      );
                    })}
                  </div>
                </div>

                <hr className="my-10" />

                {/* Layout Selection */}
                <div>
                  <div className="flex flex-col">
                    <h1 className="text-lg font-medium">Layout Selector</h1>
                    <p className="text-gray-500 text-[15px] font-medium">
                      Choose between two layout options.
                    </p>
                  </div>

                  <div className="lg:grid-cols-2 grid grid-cols-1 grid-rows-1 gap-4 mt-6">
                    {menuItems["layout"].map(({ id, name, image }) => {
                      // get currently selected theme
                      const isLayoutSelected = id === selectedLayout;
                      return (
                        <div
                          key={id}
                          onClick={() =>
                            setMenuTheme({ ...menuTheme, selectedLayout: id })
                          }
                          className={`"overflow-hidden outline outline-[2px] ${
                            isLayoutSelected
                              ? "outline-black/90"
                              : "outline-muted"
                          } rounded-[1px] hover:bg-bottom transition-all ease-in-out duration-700 cursor-pointer`}
                        >
                          <img src={image} alt={name} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>

              {/* Customization Tabs */}
              <TabsContent value="customization">
                <div className="mt-8">
                  <div className="flex flex-col">
                    <h1 className="text-lg font-medium">App Heading</h1>
                    <p className="text-gray-500 text-[15px] font-medium">
                      Choosing the right header between a logo & text.
                    </p>
                  </div>

                  <div className="lg:grid-cols-2 grid grid-cols-1 grid-rows-1 gap-4 mt-6">
                    {menuItems["header"].map(({ id, name, image }) => {
                      // get currently selected theme
                      const isHeaderSelected = id === selectedHeader;
                      return (
                        <div
                          key={id}
                          onClick={() =>
                            setMenuTheme({ ...menuTheme, selectedHeader: id })
                          }
                          className={`overflow-hidden outline outline-[2px] ${
                            isHeaderSelected
                              ? "outline-black/90"
                              : "outline-muted"
                          } rounded-[1px] hover:bg-bottom transition-all ease-in-out duration-700 cursor-pointer`}
                        >
                          <img src={image} alt={name} />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <hr className="my-10" />

                <div>
                  <div className="flex flex-col">
                    <h1 className="text-lg font-medium">App Background</h1>
                    <p className="text-gray-500 text-[15px] font-medium">
                      Customize and change the color palette of your
                      application&apos;s backdrop.
                    </p>
                  </div>

                  {/* Select App Background Color */}
                  <div className="mt-6">
                    {/* default colors */}
                    <div className="flex flex-row gap-5">
                      <button
                        onClick={() =>
                          setMenuTheme({
                            ...menuTheme,
                            selectedBgColor: "#000000",
                            selectedCustomColor: "",
                          })
                        }
                        style={{
                          borderColor: `${
                            selectedBgColor === "#000000"
                              ? "#000000"
                              : "#f1f5f9"
                          }`,
                        }}
                        className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground h-9 border-accent inline-flex items-center justify-start px-3 mb-3 text-sm font-medium transition-colors duration-300 border-2 rounded-md"
                      >
                        <span
                          style={{ backgroundColor: `#000000` }}
                          className="shrink-0 bg-slate-700 flex items-center justify-center w-5 h-5 mr-1 -translate-x-1 rounded-full"
                        >
                          {selectedBgColor === "#000000" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 text-white"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          )}
                        </span>
                        BLACK
                      </button>

                      <button
                        onClick={() =>
                          setMenuTheme({
                            ...menuTheme,
                            selectedBgColor: "#ffffff",
                            selectedCustomColor: "",
                          })
                        }
                        style={{
                          borderColor: `${
                            selectedBgColor === "#ffffff"
                              ? "#555555"
                              : "#f1f5f9"
                          }`,
                        }}
                        className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground h-9 inline-flex items-center justify-start px-3 mb-3 text-sm font-medium transition-colors duration-300 border-2 border-gray-400 rounded-md"
                      >
                        <span
                          style={{ backgroundColor: `#dddddd` }}
                          className="shrink-0 bg-slate-900 flex items-center justify-center w-5 h-5 mr-1 -translate-x-1 rounded-full"
                        >
                          {selectedBgColor === "#ffffff" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 text-black"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          )}
                        </span>
                        WHITE
                      </button>
                    </div>

                    <div className="grid grid-cols-3 grid-rows-2 gap-2">
                      {backgroundColors.slice(0, 5).map((bc, i) => (
                        <button
                          onClick={() =>
                            setMenuTheme({
                              ...menuTheme,
                              selectedBgColor: bc.color,
                              selectedCustomColor: "",
                            })
                          }
                          key={i}
                          style={{
                            borderColor: `${
                              selectedBgColor === bc.color
                                ? selectedBgColor
                                : "#f1f5f9"
                            }`,
                          }}
                          className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground h-9 border-accent inline-flex items-center justify-start px-3 text-sm font-medium transition-colors duration-300 border-2 rounded-md"
                        >
                          <span
                            style={{ backgroundColor: `${bc.color}` }}
                            className="shrink-0 bg-slate-700 flex items-center justify-center w-5 h-5 mr-1 -translate-x-1 rounded-full"
                          >
                            {selectedBgColor === bc.color && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4 h-4 text-white"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            )}
                          </span>
                          {bc.colorName}
                        </button>
                      ))}

                      {/* Display Custom Color Option */}
                      <div className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground h-9 border-accent relative inline-flex items-center justify-start p-0 text-sm font-medium transition-colors duration-300 border-2 rounded-md">
                        {selectedCustomColor && (
                          <span
                            style={{
                              backgroundColor: `${selectedCustomColor}`,
                            }}
                            className="shrink-0 bg-slate-700 top-[6px] left-2 absolute z-10 flex items-center justify-center w-5 h-5 mr-1 -translate-x-1 rounded-full"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 text-white"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                        )}

                        <input
                          style={{
                            borderColor: `${
                              selectedCustomColor ? selectedCustomColor : ""
                            }`,
                          }}
                          type="text"
                          placeholder="#000000"
                          className={`ring-offset-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-accent hover:text-accent-foreground h-9 border-accent relative inline-flex items-center justify-start w-full px-3 text-sm font-medium transition-colors duration-300 border-2 rounded-md ${
                            selectedCustomColor ? "pl-6" : ""
                          }`}
                          value={customColor || selectedCustomColor || ""}
                          onChange={(e) => {
                            setCustomColor(e.target.value);
                          }}
                        />

                        {/* Show cross button to remove custom color and rest to default */}
                        {selectedCustomColor && customColor.length < 4 && (
                          <X
                            size={25}
                            className="top-1 right-1 absolute text-red-600 cursor-pointer"
                            onClick={() => {
                              setMenuTheme({
                                ...menuTheme,
                                selectedCustomColor: "",
                              });
                              setCustomColor("");
                            }}
                          />
                        )}

                        {/* Show check button when color is valid */}
                        {/^#[0-9A-F]{3}$|^#[0-9A-F]{6}$/i.test(customColor) && (
                          <Check
                            size={25}
                            className="top-1 right-1 absolute text-green-600 cursor-pointer"
                            onClick={() => {
                              setMenuTheme({
                                ...menuTheme,
                                selectedCustomColor: customColor,
                                selectedBgColor: customColor,
                              });
                              setCustomColor("");
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="my-10" />

                <div>
                  <div className="flex flex-col">
                    <h1 className="text-lg font-medium">
                      Primary & Secondary Color
                    </h1>
                    <p className="text-gray-500 text-[15px] font-medium">
                      Personalize the color palette of primary & secondary text
                      color.
                    </p>
                  </div>

                  <div className="gap-x-10 gap-y-8 flex flex-row items-center justify-start mt-6">
                    <div className="pt-4 pb-4 px-3 border-[2px] border-accent rounded-sm">
                      <h1 className="mb-2 font-medium text-[0.875rem]">
                        Primary
                      </h1>

                      <div className="card-menu-menu-menu-menu-menu-menu-menu-menu justify-content-center flex">
                        <ColorPicker
                          value={selectedPrimaryColor}
                          onChange={(e) =>
                            setMenuTheme({
                              ...menuTheme,
                              selectedPrimaryColor: `#${e.value}`,
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="pt-4 pb-4 px-3 border-[2px] border-accent rounded-sm">
                      <h1 className="mb-2 font-medium text-[0.875rem]">
                        Secondary
                      </h1>

                      <div className="card-menu-menu-menu-menu-menu-menu-menu-menu justify-content-center flex">
                        <ColorPicker
                          value={selectedSecondaryColor}
                          onChange={(e) =>
                            setMenuTheme({
                              ...menuTheme,
                              selectedSecondaryColor: `#${e.value}`,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Preview Customizations */}
            <MenuPreview />
          </div>
        </div>
      </div>
    </>
  );
}
