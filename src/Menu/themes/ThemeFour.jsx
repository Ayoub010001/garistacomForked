import { Link } from "react-router-dom";
import { themeContent, menuButtons } from "../constants";

const ThemeFour = ({
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
      <div className="w-full h-[130px] relative">
        {/* Banner Overlay */}
        <div className="opacity-35 absolute top-0 left-0 w-full h-full bg-black"></div>

        {/* Banner Image */}
        <img
          src={themeContent[selectedTheme].bannerImage}
          className="object-cover w-full h-full"
          alt="Banner Image"
        />

        {/* Banner Text */}
        <div className="top-2 absolute z-20 w-full py-4">
          <h2 className="w-full mx-auto mt-10 font-mono text-2xl font-bold text-center text-white">
            {themeContent[selectedTheme].name}
          </h2>
          <p className="hidden text-xs text-center text-white">
            {themeContent[selectedTheme].description}
          </p>
        </div>

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
              <h2 className="mr-2 text-lg font-bold text-white">LOGO</h2>
            )}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div
        style={{
          backgroundColor: `${selectedBgColor}`,
          color: `${selectedPrimaryColor}`,
        }}
        className="z-20 flex-1 w-full"
      >
        <div className="scrollbar-hide flex gap-6 px-2 pt-1 pb-6 overflow-x-scroll">
          {themeContent[selectedTheme].categories.map(
            ({ name, catImage, id }) => (
              <Link
                style={{
                  borderColor: `${selectedSecondaryColor}`,
                }}
                to={`#`}
                key={id}
                className="p-4 shadow-xl border rounded-xl flex-shrink-0 w-[120px] h-[140px] group flex flex-col gap-4 bg-white"
              >
                <img
                  src={catImage}
                  alt="Profile Banner"
                  className="group-hover:bg-contain group-hover:scale-105 object-cover w-full h-full transition"
                />
              </Link>
            )
          )}
        </div>

        {/* Store Details */}
        <div className="flex flex-col gap-1 pb-20">
          {selectedLayout === "theme-grid" && (
            <div className="grid w-full grid-cols-2 gap-3 px-2 py-4">
              {themeContent[selectedTheme].categories.map(
                ({ name, catImage, id, discount }) => (
                  <div
                    key={id}
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${catImage})`,
                    }}
                    className={`rounded-lg w-full h-[130px] bg-center bg-contain bg-no-repeat shadow-md relative transition-all hover:bg-blend-difference hover:bg-bottom`}
                  >
                    <Link to={`#`}>
                      <div
                        style={{
                          color: `${selectedSecondaryColor}`,
                        }}
                        className="relative flex items-center justify-center w-full h-full p-3 text-sm font-medium rounded-lg"
                      >
                        {discount > 50 && (
                          <p className="absolute text-[8px] top-[1px] left-[1px] px-2 py-[0.1px] text-white bg-red-600 rounded-full">
                            -{discount}%
                          </p>
                        )}

                        <p
                          className={`px-2 py-[2px] absolute bottom-0 text-center text-white bg-black w-full rounded-b-md bg-opacity-80 hover:bg-opacity-70 ${
                            name.split(" ").length > 1
                              ? "text-[8px]"
                              : "text-[10px]"
                          }`}
                        >
                          {name}
                        </p>
                      </div>
                    </Link>
                  </div>
                )
              )}
            </div>
          )}

          {selectedLayout === "theme-list" && (
            <div className="flex flex-col w-full gap-3 px-2 py-4">
              {themeContent[selectedTheme].categories.map(
                ({ name, description, catImage, id, discount, price }) => (
                  <Link
                    to={"#"}
                    key={id}
                    className="group grid items-start grid-cols-2 gap-5"
                  >
                    <div className="flex flex-col w-full">
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
                        className="opacity-70 pt-3 text-sm font-semibold"
                      >
                        {price} MAD
                      </p>
                    </div>

                    <div className="w-[100px] h-[100px] bg-black/50 group-hover:bg-black/70 rounded-lg border border-gray-200 relative">
                      {/* Image */}
                      <img
                        src={catImage}
                        alt="Category"
                        className="group-hover:scale-105 object-cover w-full h-full transition rounded-lg"
                      />

                      {/* Discount */}
                      {discount > 50 && (
                        <p className="absolute text-[10px] top-[1px] right-[1px] px-2 py-[0.1px] text-white bg-red-600 rounded-full">
                          -{discount}%
                        </p>
                      )}
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

export default ThemeFour;
