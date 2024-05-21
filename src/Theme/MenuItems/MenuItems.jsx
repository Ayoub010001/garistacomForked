import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Button, buttonVariants } from "@/components/ui/button";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { tabAchat } from "../constant/page";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "@/components/ui/credenza";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeAll } from "../../lib/cartSlice";
import placeholderImage from "/assets/placeholder-image.png";
import ThemeGridMenuItem from "./ThemeGridMenuItem";
import ThemeListMenuItems from "./ThemeListMenuItems";

import Dettaille from "./Dettaille";
import { APIURL } from "../../../lib/ApiKey";
import { useSelectedPublishedTheme } from "../../hooks/usePublishedTheme";
function MenuItems({ dishes, selectedTab, restoId }) {
  // Get the selected published theme
  const {
    selectedBgColor,
    selectedPrimaryColor,
    selectedSecondaryColor,
    selectedLayout,
  } = useSelectedPublishedTheme();

  const [selectedProp, setSelectedProp] = useState(0); // initialisation de l'état avec 0
  const [searchTerm, setSearchTerm] = useState(""); // état pour stocker la valeur de la recherche
  const [updateFormState, setUpdateFormState] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newtab, setNewtab] = useState([...tabAchat]);
  const [cartCount, setCartCount] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const Cat = [
    {
      type: "Burgers",
      colomns: [
        {
          id: 1,
          title: "Burgers",
          url: "/",
          image: "/public/photo/burger4.jpeg",
          price: "59dh",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus maiores provident, non itaque a quia hic Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus maiores provident, non itaque a quia hic iste ",
        },
        {
          id: 2,
          title: "Burgers",
          url: "/Burgers",
          image: "/public/photo/burger4.jpeg",
          price: "59dh",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus maiores provident, non itaque a quia hic Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus maiores provident, non itaque a quia hic iste ",
        },
        {
          id: 3,
          title: "Pizza",
          url: "/Pizza",
          image: "/public/photo/burger4.jpeg",
          price: "59dh",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus maiores provident, non itaque a quia hic Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus maiores provident, non itaque a quia hic iste ",
        },
        {
          id: 4,
          title: "Donuts",
          url: "/Donuts",
          image: "/public/photo/burger4.jpeg",
          price: "59dh",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus maiores provident, non itaque a quia hic Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus maiores provident, non itaque a quia hic iste ",
        },
        {
          id: 5,
          title: "Sandwich",
          url: "/Sandwich",
          image: "/public/photo/burger4.jpeg",
          price: "59dh",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus maiores provident, non itaque a quia hic Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus maiores provident, non itaque a quia hic iste ",
        },
        {
          id: 6,
          title: "Salades",
          url: "/Salades",
          image: "/public/photo/burger4.jpeg",
          price: "59dh",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus maiores provident, non itaque a quia hic Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus maiores provident, non itaque a quia hic iste ",
        },
      ],
    },
  ];

  // Filtrer les éléments en fonction du terme de recherche
  const filteredCategories =
    dishes.length > 0 &&
    dishes.filter(
      (item) =>
        // category.some(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      // )
    );

  const toggleModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(!isModalOpen);
    console.log("Selected Item: ", item);
  };

  useEffect(() => {
    tabAchat.length = 0;
    tabAchat.push(...newtab);
  }, [newtab]);

  const listAchat = (id) => {
    setNewtab((prevTab) => [...prevTab, Cat[id - 1]]);
    setCartCount((prevCount) => prevCount + 1);
  };

  // const { addToCart, cartItems } = useCart();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleAddItem = (product, quantity) => {
    dispatch(addItem({ product, quantity: quantity, resto_id: restoId }));
    setIsModalOpen(!isModalOpen);
  };

  const handleRemoveAll = (product) => {
    dispatch(removeAll());
  };
  // const onPreview = (item) => {
  //   previewModal.onOpen(item);
  // };

  console.log("The Cart => ", cartItems);
  return (
    <>
      <div className="pt-6 max-w-[520px] mx-auto">
        {/* Search Component */}
        <form className="max-w-md px-4 pb-4 mx-auto">
          <label
            htmlFor="default-search"
            className="dark:text-white mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="start-0 ps-3 absolute inset-y-0 flex items-center pointer-events-none">
              <svg
                className="dark:text-gray-400 w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full px-2 py-[9px] ps-10 text-sm text-gray-900 border border-gray-300 rounded-[.5rem] bg-gray-50 input-height-small"
              placeholder="Search menu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
          </div>
        </form>
        {/* Search Component Ends Here */}

        {/* Filtered Categories */}
        <div className="px-3 mx-auto overflow-x-auto">
          <h1
            style={{ color: selectedSecondaryColor }}
            className="pb-2 text-lg font-semibold capitalize"
          >
            {selectedTab}
          </h1>

          <div
            className={`grid ${
              selectedLayout === "theme-grid" ? "grid-cols-2" : "grid-cols-1"
            } gap-5 ${
              filteredCategories.length > 0 && "mb-[100px] lg:mb-[150px]"
            }`}
          >
            {filteredCategories.length > 0 &&
              filteredCategories.map((item, index) => (
                <div className="tabs-container overflow-x-auto" key={index}>
                  {/* Modal Trigger */}
                  <div className="flex gap-4">
                    <Credenza
                      key={item.id}
                      className={"!bg-white !py-0"}
                      open={isModalOpen}
                      onOpenChange={setIsModalOpen}
                    >
                      <CredenzaTrigger
                        style={{ backgroundColor: selectedBgColor }}
                        asChild
                        className="h-auto w-full !py-0"
                      >
                        <Button className="px-0">
                          <div
                            key={item.id}
                            className="relative shadow-md rounded-[10px] w-full border-gray-300 border inline-block"
                          >
                            {selectedLayout === "theme-grid" ? (
                              <ThemeGridMenuItem
                                setSelectedItem={setSelectedItem}
                                placeholderImage={placeholderImage}
                                item={item}
                              />
                            ) : (
                              <ThemeListMenuItems
                                setSelectedItem={setSelectedItem}
                                placeholderImage={placeholderImage}
                                item={item}
                              />
                            )}
                          </div>
                        </Button>
                      </CredenzaTrigger>

                      {/* Item Content Modal */}
                      <CredenzaContent
                        style={{ backgroundColor: selectedBgColor }}
                        className="md:flex-col md:items-center md:max-w-sm md:scrollbar-hide md:overflow-y-scroll flex w-full max-h-screen mx-auto"
                      >
                        {selectedItem != null && (
                          <>
                            {/* Modal Content Header */}
                            <CredenzaHeader
                              photo={
                                `${APIURL}/storage/${selectedItem.image}` ??
                                placeholderImage
                              }
                              className="p-0"
                            ></CredenzaHeader>

                            {/* Modal Content Body */}
                            <CredenzaBody className="sm:pb-0 mt-5 space-y-4 text-sm text-center">
                              <CredenzaTitle
                                style={{ color: selectedSecondaryColor }}
                              >
                                {selectedItem.name}
                              </CredenzaTitle>
                              <p
                                style={{
                                  color: selectedSecondaryColor,
                                  opacity: 0.7,
                                }}
                                className="m-0"
                              >
                                {selectedItem.desc.length > 20
                                  ? selectedItem.desc.slice(0, 30) + "..."
                                  : selectedItem.desc}
                              </p>
                              <div className="flex items-center justify-center text-center">
                                <div className="flex items-center gap-2">
                                  <Button
                                    size="icon"
                                    variant="outline"
                                    onClick={() =>
                                      setQuantity((prev) =>
                                        prev > 1 ? prev - 1 : 1
                                      )
                                    }
                                  >
                                    <MinusIcon className="w-4 h-4" />
                                  </Button>

                                  <span
                                    style={{ color: selectedSecondaryColor }}
                                    className="text-base font-medium"
                                  >
                                    {quantity}
                                  </span>

                                  <Button
                                    size="icon"
                                    variant="outline"
                                    onClick={() =>
                                      setQuantity((prev) => prev + 1)
                                    }
                                  >
                                    <PlusIcon className="w-4 h-4" />
                                  </Button>
                                </div>

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="30"
                                  height="30"
                                  fill="currentColor"
                                  className="bi bi-dot mx-1"
                                  viewBox="0 0 16 16"
                                  style={{ color: selectedPrimaryColor }}
                                >
                                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                </svg>

                                <span style={{ color: selectedSecondaryColor }}>
                                  {(selectedItem.price * quantity).toFixed(2)}{" "}
                                  MAD
                                </span>
                              </div>
                            </CredenzaBody>

                            <CredenzaFooter className="grid grid-cols-1 gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  handleAddItem(selectedItem, quantity);
                                }}
                                style={{
                                  backgroundColor: isClicked
                                    ? selectedSecondaryColor
                                    : selectedPrimaryColor,
                                }}
                                // onClick={()=>{setIsClicked(!isClicked)}}
                                className={`rounded-[0.5em] py-2 px-4 transition-all duration-300 border border-primary font-medium text-xs md:text-sm flex items-center justify-center gap-1 w-full`}
                              >
                                <div
                                  style={{
                                    color: isClicked
                                      ? selectedPrimaryColor
                                      : selectedBgColor,
                                  }}
                                  className={`text-lg font-semibold`}
                                >
                                  {isClicked
                                    ? "Added To Your Cart"
                                    : `Add to selected: ${(
                                        selectedItem.price * quantity
                                      ).toFixed(2)} MAD`}
                                </div>
                              </button>

                              <CredenzaClose asChild>
                                <Button
                                  style={{ color: selectedSecondaryColor }}
                                  variant="outline"
                                  className="hover:bg-transparent hover:border-none block bg-transparent border-none"
                                >
                                  Close
                                </Button>
                              </CredenzaClose>
                            </CredenzaFooter>
                          </>
                        )}
                      </CredenzaContent>
                    </Credenza>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Display no items message  */}
        {!(filteredCategories.length > 0) && (
          <div className="w-full pt-5 text-center">
            <p
              style={{ color: selectedSecondaryColor }}
              className="text-lg font-semibold"
            >
              {searchTerm.length > 0
                ? `No items found for ${searchTerm}`
                : "No items available for this category"}
            </p>
          </div>
        )}
      </div>
      {/* <div className="dishes-container">
          {dishes.length > 0 && dishes.map(dish => (
            <div key={dish.id} className="dish">
              <img src={dish.image} alt={dish.title} />
              <div>
                <h3>{dish.name}</h3>
                <p>{dish.desc}</p>
                <p>{dish.price}</p>
              </div>
            </div>
          ))}
        </div> */}
      {/* <Dettaille updateFormState={updateFormState} setUpdateFormState={setUpdateFormState} /> */}
    </>
  );
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
export default MenuItems;
