'use client';

import { useWishlist } from "@/app/context/WishlistContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Items = [
    {
        id: 1,
        name: "Vanz Red Lable",
        image: "/assets/vans.png",
        price: 299,
        category: "Sneaker",
        color: "black",
        material: "Cotton",
        size: "Medium",
    },
    {
        id: 2,
        name: "Stark Glasses",
        image: "/assets/igt.png",
        price: 398,
        category: "Accessory",
        color: "Black",
        material: "Wool",
        size: "Large",
    },
    {
        id: 3,
        name: "Single-Origin Cashmere Beanie",
        image: "/assets/sweater.png",
        price: 98,
        category: "Clothing",
        color: "red",
        material: "Cashmere",
        size: "Small",
    },
    {
        id: 4,
        name: "Nike Air Jordan 1 High",
        image: "/assets/cujay.png",
        price: 498,
        category: "Clothing",
        color: "green",
        material: "Alpaca",
        size: "Extra Large",
    },
    {
        id: 5,
        name: "Adidas Three Strips",
        image: "/assets/adid.png",
        price: 250,
        category: "Trouser",
        color: "black",
        material: "Leather",
        size: "Medium",
    },
    {
        id: 6,
        name: "Nike Air Jordan 2 High",
        image: "/assets/air.png",
        price: 399,
        category: "Sneaker",
        color: "blue",
        material: "Leather",
        size: "Large",
    },
    {
        id: 7,
        name: "Black Cap",
        image: "/assets/cap.png",
        price: 120,
        category: "Cap",
        color: "beige",
        material: "Straw",
        size: "Medium",
    },
    {
        id: 8,
        name: "White Cut Top",
        image: "/assets/cuttop.png",
        price: 150,
        category: "Clothing",
        color: "white",
        material: "Denim",
        size: "Large",
    },
    {
        id: 9,
        name: "Camo Cap",
        image: "/assets/cap.png",
        price: 450,
        category: "Cap",
        color: "brow",
        material: "Leather",
        size: "10",
    },
    {
        id: 10,
        name: "Black Luxury Hoddie",
        image: "/assets/hoddie.png",
        price: 79,
        category: "Clothing",
        color: "black",
        material: "Cotton",
        size: "Medium",
    },
    {
        id: 11,
        name: "Gray Trausers",
        image: "/assets/tra.png",
        price: 245,
        category: "Trousers",
        color: "gray",
        material: "Fleece",
        size: "Small",
    },
    {
        id: 12,
        name: "Shirt",
        image: "/assets/shirt.png",
        price: 99,
        category: "Clothing",
        color: "white",
        material: "Silk",
        size: "One Size",
    },
    {
        id: 13,
        name: "Czer Rolex Watch",
        image: "/assets/watch.png",
        price: 99,
        category: "Accessory",
        color: "Black",
        material: "Silk",
        size: "One Size",
    }
];

export default function Product({ filters, sortOption }) {
    const router = useRouter();
    const { addToWishlist } = useWishlist();
    const [expandedItem, setExpandedItem] = useState(null);

    const handleProductClick = (id) => {
        router.push(`/product/${id}`);
    };

    const filteredItems = Items.filter((item) => {
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

    const toggleExpanded = (id) => {
        setExpandedItem(expandedItem === id ? null : id);
    };

    return (
        <div className="flex w-full justify-center items-center pt-7 md:pt-12 pb-8">
            <div className="flex flex-wrap w-[90%] items-center md:gap-4 justify-between md:justify-start">
                {sortedItems.length > 0 ? (
                    sortedItems.map((item) => (
                        <div
                            className="flex items-start justify-start w-[48%] md:w-[300px] cursor-pointer opacity-0 transition-opacity duration-1000 ease-in-out animate-fadeIn"
                            key={item.id}
                            onClick={() => handleProductClick(item.id)}
                        >
                            <div className="flex flex-col">
                                <div className="flex relative w-[100%] overflow-hidden md:w-[300px]">
                                    <img
                                        src={item.image}
                                        className="relative w-[100%] object-contain h-[210px] bg-blue-50 md:h-[350px] md:w-[300px] transition-transform duration-500 ease-in-out transform"
                                        alt={item.name}
                                    />
                                    <img
                                        src="/icons/Plus.png"
                                        className="absolute bottom-4 right-3"
                                        alt="View Details"
                                    />
                                    <img
                                        src="/icons/Heart.png"
                                        className="absolute top-4 right-3 cursor-pointer"
                                        alt="Add to Wishlist"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToWishlist(item);
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs md:text-sm">{item.name}</p>
                                    <p className="font-semibold text-sm">${item.price}</p>
                                </div>
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
