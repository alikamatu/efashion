'use client';

import { useWishlist } from "@/app/context/WishlistContext";
import AllProducts from "@/app/data/products";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlinePlus } from "react-icons/ai";

export default function Product({ filters, sortOption }) {
    const router = useRouter();
    const { addToWishlist } = useWishlist();
    const [wishlist, setWishlist] = useState([]); // Track wishlist items
    const [popEffect, setPopEffect] = useState(null);

    useEffect(() => {
        const storedWishlist = localStorage.getItem("wishlist");
        if (storedWishlist) {
            setWishlist(JSON.parse(storedWishlist));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const handleProductClick = (id) => {
        router.push(`/product/${id}`);
    };

    const toggleWishlist = (item) => {
        if (wishlist.includes(item.id)) {
            setWishlist(wishlist.filter((id) => id !== item.id));
        } else {
            setWishlist([...wishlist, item.id]);
            addToWishlist(item);
            setPopEffect(item.id);
            setTimeout(() => setPopEffect(null), 300);
        }
    };

    const filteredItems = AllProducts.filter((item) => {
        const matchesCategory = !filters.category || item.category === filters.category;
        const matchesColor =
            !filters.colors || filters.colors.length === 0 || filters.colors.includes(item.color);
        const matchesMaterial =
            !filters.material || item.material === filters.material;
        const matchesSize = !filters.size || item.size === filters.size;

        return matchesCategory && matchesColor && matchesMaterial && matchesSize;
    });

    const sortedItems = [...filteredItems].sort((a, b) => {
        switch (sortOption) {
            case "price-low-high":
                return a.price - b.price;
            case "price-high-low":
                return b.price - a.price;
            default:
                return 0;
        }
    });

    return (
        <div className="flex justify-center items-center min-h-screen p-2 md:p-12">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
                {sortedItems.length > 0 ? (
                    sortedItems.map((item, index) => (
                        <div
                            className={`flex flex-col items-center justify-start w-full bg-white cursor-pointer shadow-lg rounded-lg transition-transform ${
                                index === sortedItems.length - 1 ? "justify-self-center" : ""
                            }`}
                            key={item.id}
                            onClick={() => handleProductClick(item.id)}
                        >
                            <div className="relative w-full overflow-hidden group">
                                <img
                                    src={item.image}
                                    className="w-full object-contain h-[210px] md:h-[350px] transition-transform duration-500 ease-in-out"
                                    alt={item.name}
                                />
                                <AiOutlinePlus
                                    className="absolute bottom-4 right-3 text-xl text-gray-600 transition-transform transform"
                                    title="View Details"
                                />
                                {wishlist.includes(item.id) ? (
                                    <AiFillHeart
                                        className={`absolute top-4 right-3 text-xl text-red-600 cursor-pointer transition-transform transform ${
                                            popEffect === item.id ? "animate-pop" : ""
                                        }`}
                                        title="Remove from Wishlist"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleWishlist(item);
                                        }}
                                    />
                                ) : (
                                    <AiOutlineHeart
                                        className="absolute top-4 right-3 text-xl text-gray-600 cursor-pointer transition-transform transform group-hover:scale-125"
                                        title="Add to Wishlist"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleWishlist(item);
                                        }}
                                    />
                                )}
                            </div>
                            <div className="text-center mt-2">
                                <p className="text-xs md:text-sm">{item.name}</p>
                                <p className="font-semibold text-sm">${item.price}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center w-full text-gray-500">No items match your filters.</p>
                )}
            </div>
        </div>
    );
}
