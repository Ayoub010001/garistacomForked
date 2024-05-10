import React, { useState, useEffect } from 'react';
import { tabAchat } from './../constant/page';
import "./Achat.css"
import { useDispatch, useSelector  } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../../lib/cartSlice';

function Achat() {
  const cartItems = useSelector(state => state.cart.items);
  const totalCost = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
      <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <div>
              {cartItems.map(item => (
                  <CartItem key={item.id} item={item} />
              ))}
          </div>
          <div className="mt-4">
              <h3 className="text-lg">Total Cost: ${totalCost.toFixed(2)}</h3>
              <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded">CHECKOUT</button>
          </div>
      </div>
  );
}

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
      <div className="flex justify-between items-center my-2 p-2 border-b">
          <div className="flex items-center">
              <img src={item.image || '/default-image.png'} alt={item.name} className="w-20 h-20 mr-4" />
              <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p>${item.price}</p>
              </div>
          </div>
          <div>
              <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
              <span className="mx-2">{item.quantity}</span>
              <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
          </div>
          <button onClick={() => dispatch(removeItem(item.id))} className="text-red-500">X</button>
      </div>
  );
}

export default Achat;
