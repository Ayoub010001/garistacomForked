import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const newItem = { ...item, quantity: 1 }; // Assuming you start with 1 item
        setCartItems(prevItems => {
            // Check if the item is already in the cart
            const itemExists = prevItems.find(it => it.id === item.id);
            if (itemExists) {
                // If item exists, increase the quantity
                return prevItems.map(it => 
                    it.id === item.id ? { ...it, quantity: it.quantity + 1 } : it
                );
            } else {
                // Otherwise, add the new item
                return [...prevItems, newItem];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};