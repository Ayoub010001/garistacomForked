import { Link } from "react-router-dom";
import Logo from "../../Theme/Footer/negative-feedback-icon.svg";
import { themeContent, menuButtons } from "../constants";
import {
  ArrowRight,
  HomeIcon,
  InfoIcon,
  Search,
  ShoppingBagIcon,
  StarIcon,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaSnapchat } from "react-icons/fa";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const ThemeOne = ({
  selectedBgColor,
  selectedHeader,
  selectedLayout,
  selectedPrimaryColor,
  selectedSecondaryColor,
  selectedTheme,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <section
      style={{ backgroundColor: `${selectedBgColor}` }}
      className="flex flex-col w-full min-h-screen"
    >
      {/* Menu Header */}
      <div className="py-4 px-2">
        <div className="relative mx-auto h-[150px] max-w-md overflow-hidden rounded-[.5rem] shadow">
          {/* Banner */}
          <div className="bg-secondary-gray overflow-hidden">
            <img
              src={themeContent[1].bannerImage}
              loading="lazy"
              className="max-h-44 bg-secondary-gray object-cover w-full h-screen"
              alt={themeContent[1].name}
            />
          </div>

          {/* Banner Overlay and Restaurant Name */}
          <div className="bg-black/40 absolute inset-0 z-10"></div>
          <div className="bottom-16 absolute inset-x-0 z-20 p-4 text-center">
            <h3 className="text-xl font-medium text-white">
              {themeContent[1].name}
            </h3>
          </div>

          {/* Social Icons */}
          <div className="absolute inset-x-0 bottom-0 z-20 flex justify-between p-4 text-center">
            <div className="flex gap-2">
              <Link to={"https://facebook.com"} target="_blank">
                <FaFacebook color="white" />
              </Link>
              <Link to={"https://instagram.com"} target="_blank">
                <FaInstagram color="white" />
              </Link>
              <Link to={"https://snapchat.com"} target="_blank">
                <FaSnapchat color="white" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="w-full mx-auto">
        {/* Search & Categories Section */}
        <div className="flex flex-col gap-3 px-2 py-4">
          {/* Categories */}
          <div className="scrollbar-hide overflow-x-scroll gap-2 flex items-center">
            {themeContent[1].categories.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-center gap-1 px-2 py-1  rounded-full cursor-pointer border border-gray-300 shadow-md`}
                style={{
                  backgroundColor:
                    item.id.trim() === selectedCategory.trim()
                      ? selectedPrimaryColor
                      : "",
                  color:
                    item.id.trim() === selectedCategory.trim()
                      ? selectedBgColor
                      : selectedSecondaryColor,
                }}
                onClick={() => setSelectedCategory(item.id.trim())}
              >
                <p className="text-xs font-medium">{item.name}</p>
              </div>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative rounded-full w-full mx-auto bg-gray-400">
            <button className="absolute left-2 top-[10px] flex flex-col items-center justify-center pointer-events-none">
              <Search size={13} className="text-gray-500" />
            </button>
            <input
              type="search"
              placeholder="Search menu..."
              className="w-full rounded-[.5rem] pl-7 pr-2 py-2 border border-secondaryBg focus:outline-none focus:ring-0 text-xs placeholder:text-xs"
            />
          </div>
        </div>

        {/* Products based on the selected category */}
        <div className="flex-col gap-1 pb-24 mt-2 w-full">
          <div className="flex items-center justify-between px-2">
            <h2
              style={{ color: `${selectedSecondaryColor}` }}
              className="text-base font-medium"
            >
              {
                themeContent[1].categories.filter(
                  (cat) => cat.id === selectedCategory
                )[0]?.name
              }
            </h2>
          </div>

          {/* Categories Grid */}
          {selectedLayout === "theme-grid" && (
            <div className="grid grid-cols-2 gap-3 px-2 py-4">
              {themeContent[1].categories.map(
                ({ name, catImage, id, price }) => (
                  <div
                    key={id}
                    className="relative shadow-md rounded-[10px] w-full border-gray-300 border inline-block"
                  >
                    <div className="tab items-center justify-center h-full w-full overflow-hidden p-1.5 text-lg font-semibold rounded-[8px] cursor-pointer transition-colors">
                      <img
                        src={catImage}
                        alt="Menu Icon"
                        className="w-full object-contain rounded-[10px] h-20"
                      />
                      <div className="flex items-center justify-between px-1 py-2 text-black gap-2">
                        <div>
                          <h2 className="text-sm mb-0 ">{name}</h2>
                          <p className="text-xs">{price}.00</p>
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
                  </div>
                )
              )}
            </div>
          )}

          {/* Categories List */}
          {selectedLayout === "theme-list" && (
            <div className="flex-col w-full gap-3 px-2 py-4">
              {themeContent[selectedTheme].categories.map(
                ({ name, description, catImage, id, price }) => (
                  <Link
                    to={"#"}
                    key={id}
                    className="group grid items-start grid-cols-2 gap-5"
                  >
                    <div className="w-full">
                      <h1
                        style={{ color: `${selectedPrimaryColor}` }}
                        className="text-base font-medium"
                      >
                        {name}
                      </h1>
                      <p
                        style={{ color: `${selectedPrimaryColor}` }}
                        className="text-[10px] leading-snug opacity-80"
                      >
                        {description}
                      </p>
                      <p
                        style={{ color: `${selectedPrimaryColor}` }}
                        className="pt-3 text-sm font-semibold opacity-70"
                      >
                        {price} MAD
                      </p>
                    </div>

                    <div className="w-[100px] h-[100px] bg-black/50 group-hover:bg-black/70 rounded-lg border border-gray-200">
                      <img
                        src={catImage}
                        alt="Category"
                        className="group-hover:scale-105 object-cover w-full h-full transition rounded-lg"
                      />
                    </div>
                  </Link>
                )
              )}
            </div>
          )}
        </div>

        {/* Menu Footer Buttons */}
        <div className="flex flex-col justify-center items-center max-w-full">
          <footer
            style={{ backgroundColor: `${selectedBgColor}` }}
            className="absolute px-1 py-2 flex w-full items-center justify-around mx-auto shadow-lg bottom-0 rounded-b-2xl"
          >
            <Link
              to={`#`}
              className="flex flex-col items-center justify-center gap-1"
            >
              <HomeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Home
              </span>
            </Link>
            <Link
              to={`#`}
              className="flex flex-col items-center justify-center gap-1"
            >
              <StarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Rating
              </span>
            </Link>
            <Link
              to={`#`}
              className="flex flex-col items-center justify-center gap-1"
            >
              {/* <FileIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" /> */}
              <img src={Logo} alt="claims" className="h-5 w-5 " />
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Claims
              </span>
            </Link>
            <Link
              to={`#`}
              className="flex flex-col items-center justify-center gap-1"
            >
              <ShoppingBagIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Cart
              </span>
            </Link>
            <Link
              to={`#`}
              className="flex flex-col items-center justify-center gap-1"
            >
              <InfoIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Info
              </span>
            </Link>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default ThemeOne;
