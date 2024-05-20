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

import Dettaille from "./Dettaille";
import { APIURL } from "../../../lib/ApiKey";
function MenuItems({ dishes, selectedTab, restoId }) {
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
              className="block w-full px-2 py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-[.5rem] bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-height-small"
              placeholder="Search menu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
          </div>
        </form>

        <div className="px-3 mx-auto overflow-x-auto">
          <h1 className="pb-2 text-lg font-semibold text-black">
            {selectedTab}
          </h1>
          <div className="grid grid-cols-2  gap-5 mb-[100px] lg:mb-[150px]">
            {filteredCategories.length > 0 &&
              filteredCategories.map((item, index) => (
                <div className="tabs-container overflow-x-auto" key={index}>
                  <div className="flex gap-4">
                    <Credenza
                      key={item.id}
                      className={"!bg-white !py-0"}
                      open={isModalOpen}
                      onOpenChange={setIsModalOpen}
                    >
                      <CredenzaTrigger
                        asChild
                        className="h-auto w-full !py-0 !bg-white"
                      >
                        <Button className="px-0">
                          <div
                            key={item.id}
                            className="relative shadow-md rounded-[10px] w-full border-gray-300 border inline-block"
                          >
                            <div
                              onClick={() => setSelectedItem(item)}
                              className="tab items-center justify-center h-full w-full overflow-hidden p-1.5 text-lg font-semibold rounded-[8px] cursor-pointer transition-colors"
                            >
                              <img
                                src={
                                  item.image
                                    ? `${APIURL}/storage/${item.image}`
                                    : ""
                                }
                                alt="Menu Icon"
                                className="w-full object-cover rounded-[10px] h-32"
                              />
                              <div className="flex items-center justify-between px-3 py-2 text-black">
                                <div>
                                  <h2 className="text-[16px] mb-0 ">
                                    {item.name.slice(0, 7)}..
                                  </h2>
                                  <p className="text-sm">{item.price}</p>
                                </div>

                                <button
                                  type="button"
                                  onClick={handleAddItem}
                                  className="text-white leading-0 bg-primary-blue hover:bg-primary-blue w-[30px] h-[30px] flex items-center justify-center rounded-[8px]"
                                >
                                  <AiOutlinePlus
                                    style={{
                                      color: "#ffffff",
                                    }}
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </Button>
                      </CredenzaTrigger>
                      <CredenzaContent className=" flex max-h-screen bg-white">
                        {selectedItem != null && (
                          <>
                            <CredenzaHeader
                              photo={
                                selectedItem?.image
                                  ? `${APIURL}/storage/${selectedItem.image}`
                                  : ""
                              }
                              className="p-0"
                            >
                              {/* <CredenzaClose asChild>
                                <div className="close-icon" onClick={toggleModal}>
                                  
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-lg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                </div>
                                
                              </CredenzaClose> */}
                            </CredenzaHeader>
                            <CredenzaBody className="sm:pb-0 sm:text-left mt-5 space-y-4 text-sm text-center">
                              <CredenzaTitle>{selectedItem.name}</CredenzaTitle>
                              <p className="text-neutral-400 m-0">
                                {selectedItem.desc.length > 20
                                  ? selectedItem.desc.slice(0, 30) + "..."
                                  : selectedItem.desc}
                              </p>
                              <div className=" flex items-center justify-center">
                                <div className="flex items-center gap-2">
                                  <Button
                                    size="icon"
                                    variant="outline"
                                    onClick={() =>
                                      setQuantity((prev) => prev - 1)
                                    }
                                  >
                                    <MinusIcon className="w-4 h-4" />
                                  </Button>
                                  <span className="dark:text-gray-50 text-base font-medium text-gray-900">
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
                                  style={{ color: "#28509E" }}
                                >
                                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                </svg>
                                <span>
                                  {(selectedItem.price * quantity).toFixed(2)}
                                </span>
                              </div>
                            </CredenzaBody>
                            <CredenzaFooter>
                              <button
                                type="button"
                                onClick={() => {
                                  handleAddItem(selectedItem, quantity);
                                }}
                                // onClick={()=>{setIsClicked(!isClicked)}}
                                className={`rounded-[1rem] p-2  ${
                                  isClicked ? "bg-white" : "bg-primary-blue"
                                } transition-all duration-300 border border-primarbg-primary-blue font-medium text-xs md:text-sm flex items-center justify-center gap-1 `}
                              >
                                <div
                                  className={`text-lg font-semibold ${
                                    isClicked
                                      ? "text-primarbg-primary-blue"
                                      : "text-white"
                                  } `}
                                >
                                  {isClicked
                                    ? "Added To Your Cart"
                                    : `Add to selected: ${(
                                        selectedItem.price * quantity
                                      ).toFixed(2)}`}
                                </div>
                              </button>
                              <CredenzaClose asChild>
                                <Button variant="outline bg-black text-white">
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
