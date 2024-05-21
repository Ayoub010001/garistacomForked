import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  removeAll,
} from "../../lib/cartSlice";
import { APIURL } from "../../../lib/ApiKey";
import "./Achat.css";
import cartEmpty from "/assets/cart-empty.png";

export default function Achat({ tabel_id, resto_id }) {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const dispatch = useDispatch();

  const [orderSuccessModalOpen, setOrderSuccessModalOpen] = useState(false);
  async function submitOrder(cartItems, totalCost) {
    let cartItemProduct = cartItems.map((item) => ({
      type: "dish", // Assuming all items are dishes
      id: item.id,
      quantity: item.quantity,
    }));

    const order = {
      total: totalCost,
      status: "New",
      table_id: tabel_id, // Assuming static for now, you may need to adjust this based on your app's logic
      resto_id: resto_id, // Assuming static as well, adjust accordingly
      cartItems: cartItemProduct,
    };

    try {
      const response = await fetch(`${APIURL}/api/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        const errorResponse = await response.text();
        throw new Error(`HTTP error ${response.status}: ${errorResponse}`);
      }

      const responseData = await response.json();
      console.log("Order submitted:", order, cartItemProduct, responseData);
      if (response) {
        const notification = {
          title: "New Order",
          status: "Order",
          resto_id: resto_id,
        };
        const formData = new FormData();
        formData.append("title", "New Order");
        formData.append("status", "Order");
        formData.append("resto_id", resto_id);
        const responseNotification = await fetch(
          `${APIURL}/api/notifications`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(notification),
          }
        );

        console.log("Nice => ", responseNotification);
        setOrderSuccessModalOpen(false);
        dispatch(removeAll());
      }
      // Handle post-order submission logic here, like clearing the cart or redirecting the user
    } catch (error) {
      console.error("Failed to submit order:", error.message);
    }
  }

  return (
    <div className="flex flex-col w-full h-screen mx-auto bg-white">
      <div className="scrollbar-hide md:pb-20 flex flex-col w-full h-full max-w-md gap-4 p-4 mx-auto overflow-y-scroll bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="dark:text-gray-50 text-lg font-semibold text-gray-900">
            Shopping Cart
          </h2>
          <Link
            className="text-primary hover:underline dark:text-primary-400"
            to="#"
            onClick={() => dispatch(removeAll())}
          >
            Clear Cart
          </Link>
        </div>

        {cartItems.length > 0 ? (
          <div className="flex flex-col gap-2">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className="flex items-center justify-between py-3">
              <p className="dark:text-gray-400 text-sm text-gray-500">
                Total:
                <span className="dark:text-gray-50 font-medium text-gray-900">
                  {" "}
                  ${totalCost.toFixed(2)}
                </span>
              </p>
              <Button
                onClick={() => setOrderSuccessModalOpen(!orderSuccessModalOpen)}
                className="bg-primary px-4 py-2 text-white rounded-lg"
                size="lg"
              >
                Checkout
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <img
              src={cartEmpty}
              alt="Cart Empty"
              width={300}
              height={300}
              loading="lazy"
              className="object-contain w-48 h-48 mx-auto"
            />
            <p className="dark:text-gray-300 text-base font-medium text-center text-gray-600">
              Your Cart Is Empty
            </p>
          </div>
        )}
      </div>

      <AlertDialog
        open={orderSuccessModalOpen}
        onOpenChange={setOrderSuccessModalOpen}
      >
        <AlertDialogContent className="w-[80%] rounded-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Your order has been successfully submitted
            </AlertDialogTitle>
            <AlertDialogDescription>
              Thank you for your order! Your items will be delivered shortly.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              autoFocus
              onClick={() => submitOrder(cartItems, totalCost)}
            >
              Ok
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="grid gap-4">
      <div className="dark:bg-gray-800 flex items-center gap-4 p-4 bg-gray-100 rounded-lg">
        <div className="w-16 h-16 overflow-hidden rounded-md">
          <img
            alt={item.name}
            className="object-cover w-full h-full"
            height={64}
            src={`${APIURL}/storage/${item.image}`}
            style={{
              aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width={64}
          />
        </div>
        <div className="flex-1">
          <h3 className="dark:text-gray-50 text-base font-medium text-gray-900">
            {item.name}
          </h3>
          <p className="dark:text-gray-400 text-sm text-gray-500">
            ${item.price}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => dispatch(decrementQuantity(item.id))}
            size="icon"
            variant="outline"
          >
            <MinusIcon className="w-4 h-4" />
          </Button>
          <span className="dark:text-gray-50 text-base font-medium text-gray-900">
            {item.quantity}
          </span>
          <Button
            onClick={() => dispatch(incrementQuantity(item.id))}
            size="icon"
            variant="outline"
          >
            <PlusIcon className="w-4 h-4" />
          </Button>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => dispatch(removeItem(item.id))}
          className="text-red-500"
        >
          <TrashIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
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

function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
