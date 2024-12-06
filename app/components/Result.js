"use client";
import { useRouter } from "next/navigation";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useWishlist } from "../context/WishlistContext";

export default function Result({ results }) {
    const { addToWishlist } = useWishlist();
    const [popEffect, setPopEffect] = useState(null);
    const [wishlist, setWishlist] = useState([]);
    const router = useRouter();

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

    return (
        <div className="flex p-9 overflow-y-scroll search">
            {results.length > 0 ? (
                <div className="flex flex-wrap gap-6 justify-center w-full px-4">
                    {results.map((product, index) => (
                        <div
                            key={product.id}
                            className={`flex w-[300px] flex-col items-center justify-start bg-white cursor-pointer shadow-lg rounded-lg transition-transform duration-300 ease-in-out opacity-0 animate-fadeIn delay-${index * 50}`}
                            onClick={() => handleProductClick(product.id)}
                        >
                            <div className="relative w-full overflow-hidden group">
                                <img
                                    src={product.image}
                                    className="w-full object-contain h-[210px] md:h-[350px] transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    alt={product.name}
                                />
                                {wishlist.includes(product.id) ? (
                                    <AiFillHeart
                                        className={`absolute top-4 right-3 text-xl text-red-600 cursor-pointer transition-transform transform ${
                                            popEffect === product.id ? "animate-pop" : ""
                                        }`}
                                        title="Remove from Wishlist"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleWishlist(product);
                                        }}
                                    />
                                ) : (
                                    <AiOutlineHeart
                                        className="absolute top-4 right-3 text-xl text-gray-600 cursor-pointer transition-transform transform group-hover:scale-125"
                                        title="Add to Wishlist"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleWishlist(product);
                                        }}
                                    />
                                )}
                            </div>
                            <div className="text-center mt-2">
                                <p className="text-xs md:text-sm">{product.name}</p>
                                <p className="font-semibold text-sm">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No results found.</p>
            )}
        </div>
    );
}
