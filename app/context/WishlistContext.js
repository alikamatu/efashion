'use client';

import { createContext, useContext, useEffect, useState } from "react";

// Create the context
const WishlistContext = createContext();

// Create a provider component
export function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    // Load wishlist from localStorage on component mount
    useEffect(() => {
        const storedWishlist = localStorage.getItem("wishlist");
        if (storedWishlist) {
            setWishlist(JSON.parse(storedWishlist));
        }
    }, []);

    // Save wishlist to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (item) => {
        setWishlist((prev) => {
            if (!prev.find((wishlistItem) => wishlistItem.id === item.id)) {
                return [...prev, item];
            }
            return prev; // Avoid duplicates
        });
    };

    const removeFromWishlist = (id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}

// Custom hook for using the wishlist context
export function useWishlist() {
    return useContext(WishlistContext);
}
