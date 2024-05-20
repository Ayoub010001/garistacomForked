import { Link } from "react-router-dom";
import { themeContent, menuButtons } from "../constants";
import { ArrowRight } from "lucide-react";
import { BiMoney } from "react-icons/bi";
import { FaCcMastercard, FaPaypal, FaStripe } from "react-icons/fa";

const ThemeThree = ({
  selectedBgColor,
  selectedHeader,
  selectedLayout,
  selectedPrimaryColor,
  selectedSecondaryColor,
  selectedTheme,
}) => {
  return (
    <section className="flex flex-col w-full min-h-screen bg-transparent">
      {/* Header */}
      <div className="w-full h-[100px] relative">
        {/* Banner Overlay */}
        <div className="opacity-35 absolute top-0 left-0 w-full h-full bg-black"></div>

        {/* Banner Image */}
        <img
          src={themeContent[selectedTheme].bannerImage}
          className="object-cover w-full h-full"
          alt="Banner Image"
        />

        {/* Social Icons and Logo */}
        <div className="flex items-center justify-between w-full h-full">
          {/* Social Icons */}
          <div className="absolute top-0 left-0 px-4 mt-4">
            <div className="flex items-center gap-4">
              {themeContent[selectedTheme].socials.map((item) => (
                <Link key={item.name} to={item.url} target="_blank">
                  <item.icon size={20} className="text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Info Button */}
          <div className="absolute top-0 right-0 mt-4">
            {selectedHeader === "logo-header" ? (
              <img
                src={themeContent[selectedTheme].infoButton}
                alt="Info"
                className="h-[25px] w-[25px] cursor-pointer mr-4"
              />
            ) : (
              <h2 className="text-lg font-bold text-white mr-2">LOGO</h2>
            )}
          </div>
        </div>
      </div>

      {/* Company Info Section */}
      <div className="px-3 z-20 -mt-10 w-full">
        <div
          style={{ backgroundColor: `${selectedBgColor}` }}
          className="flex items-center justify-start gap-3 rounded shadow-md my-4 px-2 py-3 w-full"
        >
          <img
            src={themeContent[selectedTheme].image}
            alt="Info"
            className="h-12 w-12 cursor-pointer object-contain"
          />

          <div className="flex flex-col gap-2 w-full">
            <h2
              style={{ color: `${selectedPrimaryColor}` }}
              className="text-sm font-semibold text-opacity-80"
            >
              {themeContent[selectedTheme].name}
            </h2>

            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <BiMoney size={15} className="text-green-600" />
                <FaPaypal size={15} className="text-blue-600" />
                <FaStripe size={15} className="text-blue-700" />
                <FaCcMastercard size={15} className="text-orange-600" />
              </div>

              <Link to={`#`} className="text-sm font-bold">
                <ArrowRight
                  size={15}
                  style={{ color: `${selectedPrimaryColor}` }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div
        style={{
          backgroundColor: `${selectedBgColor}`,
          color: `${selectedPrimaryColor}`,
        }}
        className="flex-1 z-20 w-full"
      >
        {/* Store Details */}
        <div className="flex flex-col gap-1 pb-24">
          {selectedLayout === "theme-grid" && (
            <div className="grid grid-cols-3 gap-3 px-2 py-4 w-full">
              {themeContent[selectedTheme].categories.map(
                ({ name, catImage, id }) => (
                  <div
                    key={id}
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${catImage})`,
                    }}
                    className={`rounded-lg w-full h-[100px] bg-center bg-contain bg-no-repeat shadow-md relative transition-all hover:bg-blend-difference hover:bg-bottom`}
                  >
                    <Link to={`#`}>
                      <h1
                        style={{
                          color: `${selectedSecondaryColor}`,
                        }}
                        className="relative w-full flex items-center justify-center h-full p-3 text-sm font-medium rounded-lg"
                      >
                        <span
                          className={`px-2 py-[2px] absolute bottom-0 text-center text-white bg-black w-full rounded-b-md bg-opacity-80 hover:bg-opacity-70 ${
                            name.split(" ").length > 1
                              ? "text-[8px]"
                              : "text-[10px]"
                          }`}
                        >
                          {name}
                        </span>
                      </h1>
                    </Link>
                  </div>
                )
              )}
            </div>
          )}

          {selectedLayout === "theme-list" && (
            <div className="flex flex-col w-full gap-3 px-2 py-4">
              {themeContent[selectedTheme].categories.map(
                ({ name, description, catImage, id, price }) => (
                  <Link
                    to={"#"}
                    key={id}
                    className="group grid items-start grid-cols-2 gap-5 px-2 shadow-md"
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

                    <div className="w-[100px] h-[100px] bg-black/50 group-hover:bg-black/70 border border-gray-200">
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
            {menuButtons.map((item, id) => (
              <Link
                to={`#`}
                key={id}
                className="flex flex-col items-center justify-center gap-1"
              >
                <item.icon
                  style={{ color: `${selectedSecondaryColor}` }}
                  className="h-5 w-5"
                />
                <span
                  style={{ color: `${selectedSecondaryColor}` }}
                  className="text-xs font-medium"
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </footer>
        </div>
      </div>
    </section>
  );
};

export default ThemeThree;
