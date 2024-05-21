import { Link } from "react-router-dom";
import { menuButtons } from "../constants";
import { Search } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { getRestaurantSlug } from "../../Theme/lib/utils";
import { APIURL } from "../../../lib/ApiKey";

const ThemeOne = ({
  selectedBgColor,
  selectedHeader,
  selectedLayout,
  selectedPrimaryColor,
  selectedSecondaryColor,
  selectedTheme,
  restaurantInfo,
}) => {
  const [selectedCategory, setSelectedCategory] = useState({
    name: "All",
    id: 0,
  });
  const { categories, products, restoInfo } = restaurantInfo;
  const currentRestaurant = {
    ...getRestaurantSlug(),
    ...restoInfo,
  };
  const [filteredProducts, setFilteredProducts] = useState(products);

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

  const getFilteredProducts = useCallback(() => {
    if (selectedCategory.id === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products?.filter(
        (product) => product.category_id === selectedCategory.id
      );
      setFilteredProducts(newFilteredProducts);
    }
  }, [products, selectedCategory?.id]);

  useEffect(() => {
    getFilteredProducts();
  }, [getFilteredProducts, selectedCategory?.id]);

  return (
    <section
      style={{ backgroundColor: `${selectedBgColor}` }}
      className="flex flex-col w-full min-h-screen"
    >
      {/* Menu Header */}
      <div className="px-2 py-3">
        <div className="relative mx-auto h-[170px] max-w-md overflow-hidden rounded-[.5rem] shadow">
          {/* Banner */}
          <div className="bg-secondary-gray overflow-hidden">
            <img
              src={
                `${APIURL}/storage/${currentRestaurant.cover_image}` ??
                "/assets/placeholder-image.png"
              }
              loading="lazy"
              className="max-h-44 bg-secondary-gray object-cover w-full h-screen"
              alt={currentRestaurant.name}
            />
          </div>
          {/* Banner Overlay and Restaurant Name */}
          <div className="bg-black/50 absolute inset-0 z-10"></div>
          <div className="bottom-16 absolute inset-x-0 z-20 p-4 text-center">
            <h3 className="text-xl font-medium text-white">
              {currentRestaurant.name}
            </h3>
          </div>
          {/* cover_image currency description email id logo name phone resto_id
          slug  */}
          {/* Social Icons */}
          <div className="absolute inset-x-0 bottom-0 z-20 flex justify-between p-3 text-center">
            <div className="flex gap-2">
              {currentRestaurant.facebook && (
                <Link to={currentRestaurant.facebook} target="_blank">
                  <FaFacebook color="white" size={17} />
                </Link>
              )}

              {currentRestaurant.instgram && (
                <Link to={currentRestaurant.instgram} target="_blank">
                  <FaInstagram color="white" size={17} />
                </Link>
              )}

              {currentRestaurant.snapshat && (
                <Link to={currentRestaurant.snapshat} target="_blank">
                  <FaSnapchat color="white" size={17} />
                </Link>
              )}

              {currentRestaurant.tiktok && (
                <Link to={currentRestaurant.tiktok} target="_blank">
                  <FaTiktok color="white" size={17} />
                </Link>
              )}

              {currentRestaurant.whatsapp && (
                <Link to={currentRestaurant.whatsapp} target="_blank">
                  <FaWhatsapp color="white" size={17} />
                </Link>
              )}

              {currentRestaurant.youtube && (
                <Link to={currentRestaurant.youtube} target="_blank">
                  <FaYoutube color="white" size={17} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="w-full mx-auto">
        {/* Search & Categories Section */}
        <div className="flex flex-col gap-3 px-2 py-4">
          {/* Categories */}
          <div className="scrollbar-hide flex items-center gap-2 overflow-x-scroll">
            {categories?.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-center gap-1 px-4 py-1  rounded-[0.5rem] cursor-pointer border border-gray-300 shadow-md`}
                style={{
                  backgroundColor:
                    item.id === selectedCategory.id ? selectedPrimaryColor : "",
                  color:
                    item.id === selectedCategory.id
                      ? selectedBgColor
                      : selectedSecondaryColor,
                  border:
                    item.id === selectedCategory.id
                      ? `1px solid ${selectedPrimaryColor}`
                      : "",
                }}
                onClick={() =>
                  setSelectedCategory({ name: item.name, id: item.id })
                }
                onMouseOver={
                  item.id !== selectedCategory.id ? handleHoverActive : null
                }
                onMouseOut={
                  item.id !== selectedCategory.id ? handleHoverInactive : null
                }
              >
                <p className="text-xs font-medium">{item.name}</p>
              </div>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full mx-auto bg-gray-400 rounded-full">
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
        <div className="flex-col w-full gap-1 pb-24 mt-2">
          <div className="flex items-center justify-between px-2">
            <h2
              style={{ color: `${selectedSecondaryColor}` }}
              className="text-base font-medium"
            >
              {
                categories?.filter((cat) => cat.id === selectedCategory.id)[0]
                  ?.name
              }
            </h2>
          </div>

          {!(filteredProducts?.length > 0) ? (
            <div
              style={{ color: `${selectedSecondaryColor}` }}
              className="w-full my-3 text-center"
            >
              No Products Found
            </div>
          ) : (
            <>
              {/* Categories Grid */}
              {selectedLayout === "theme-grid" && (
                <div className="grid grid-cols-2 gap-3 px-2 py-4">
                  {filteredProducts?.map(({ name, image, id, price }) => (
                    <div
                      key={id}
                      className="relative shadow-md rounded-[10px] w-full border-gray-300 border inline-block"
                    >
                      <div className="group items-center justify-center h-full w-full overflow-hidden p-1.5 text-lg font-semibold rounded-[8px] cursor-pointer transition-colors">
                        <img
                          src={
                            `${APIURL}/storage/${image}` ??
                            "/assets/placeholder-image.png"
                          }
                          alt="Menu Icon"
                          className="w-full group-hover:scale-105 transition object-cover rounded-[10px] h-24"
                        />
                        <div
                          style={{ color: selectedSecondaryColor }}
                          className="flex items-center justify-between gap-2 px-1 py-2"
                        >
                          <div className="flex flex-col">
                            <h2 className="text-wrap tracing-wide text-xs font-normal">
                              {name}
                            </h2>
                            <p className="text-[10px] font-normal opacity-85">
                              {price} {currentRestaurant.currency ?? "MAD"}
                            </p>
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
                  ))}
                </div>
              )}

              {/* Categories List */}
              {selectedLayout === "theme-list" && (
                <div className="grid w-full grid-cols-1 gap-4 px-2 py-4">
                  {filteredProducts?.map(({ name, image, id, price }) => (
                    <Link
                      to={"#"}
                      key={id}
                      className="group place-items-end ps-2 grid items-start grid-cols-2 gap-5"
                    >
                      <div className="w-full">
                        <div className="text-start flex flex-col gap-3">
                          {/* Item Name */}
                          <h2
                            style={{ color: `${selectedSecondaryColor}` }}
                            className="text-sm"
                          >
                            {name.length > 20
                              ? name.slice(0, 20) + "..."
                              : name}
                          </h2>

                          {/* Item Price */}
                          <p
                            style={{ color: `${selectedSecondaryColor}` }}
                            className="opacity-80 text-xs font-medium"
                          >
                            {price} {currentRestaurant.currency ?? "MAD"}
                          </p>

                          {/* Add to cart */}
                          <button
                            type="button"
                            style={{
                              backgroundColor: selectedPrimaryColor,
                              color: selectedBgColor,
                            }}
                            className="leading-0 w-full px-2 py-1 mt-auto flex items-center justify-center rounded-[5px]"
                          >
                            <AiOutlinePlus
                              style={{
                                color: selectedBgColor,
                              }}
                            />
                          </button>
                        </div>
                      </div>

                      <div className="w-[100px] h-[100px] bg-black/50 group-hover:bg-black/70 rounded-lg border border-gray-200">
                        <img
                          src={
                            `${APIURL}/storage/${image}` ??
                            "/assets/placeholder-image.png"
                          }
                          alt="Category"
                          className="group-hover:scale-105 object-cover w-full h-full transition rounded-lg"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Menu Footer Buttons */}
        <div className="flex flex-col items-center justify-center max-w-full">
          <footer
            style={{ backgroundColor: `${selectedBgColor}` }}
            className="rounded-b-2xl absolute bottom-0 flex items-center justify-around w-full px-1 py-2 mx-auto shadow-lg"
          >
            {menuButtons.map((item, id) => (
              <Link
                to={`#`}
                key={id}
                className="flex flex-col items-center justify-center gap-1"
              >
                <item.icon
                  style={{ color: `${selectedSecondaryColor}` }}
                  className="w-5 h-5"
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

export default ThemeOne;
