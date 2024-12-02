"use client"
import { useState } from "react";

export default function MobileNav({setShowNav}) {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (section) => {
        setExpandedSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div className="flex flex-col w-full absolute top-0 z-10 bg-white">
            <div className="flex border-b-2 p-6 border-b-gray-400 h-12 items-center">
                <img onClick={()=>setShowNav(false)} src="/icons/X.png" alt="Close Menu" />
            </div>
            <div className="flex flex-col w-full p-6">
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center w-full">
                        <h2>Shop</h2>
                        <img
                            src={expandedSections.shop ? "/icons/Minus.png" : "/icons/Plus.png"}
                            alt=""
                            onClick={() => toggleSection("shop")}
                            className="cursor-pointer"
                        />
                    </div>
                    {expandedSections.shop && (
                        <div>
                            <div className="flex ml-2 justify-between items-center w-full">
                                <h3 className="text-gray-500">Categories</h3>
                                <img
                                    src={
                                        expandedSections.categories ? "/icons/Minus.png" : "/icons/Plus.png"
                                    }
                                    alt=""
                                    onClick={() => toggleSection("categories")}
                                    className="cursor-pointer"
                                />
                            </div>
                            {expandedSections.categories && (
                                <div className="flex flex-col gap-3 ml-4 pl-4 border-l-2 border-r-gray-400">
                                    <p className="pb-1 text-gray-500">Bags</p>
                                    <p className="pb-1 text-gray-500">Clothing</p>
                                    <p className="pb-1 text-gray-500">Leather Goods</p>
                                    <p className="pb-1 text-gray-500">Accessories</p>
                                    <p className="pb-1 text-gray-500">Gifts</p>
                                    <p className="pb-1 text-gray-500">Shop All</p>
                                </div>
                            )}
                            <div className="flex ml-2 justify-between items-center w-full">
                                <h3 className="text-gray-500">Featured</h3>
                                <img
                                    src={
                                        expandedSections.featured ? "/icons/Minus.png" : "/icons/Plus.png"
                                    }
                                    alt=""
                                    onClick={() => toggleSection("featured")}
                                    className="cursor-pointer"
                                />
                            </div>
                            {expandedSections.featured && (
                                <div className="flex text-gray-500 flex-col gap-3 ml-4 pl-4 border-l-2 border-r-gray-400">
                                    <p className="pb-1">New Arrivals</p>
                                    <p className="pb-1">Bestsellers</p>
                                    <p className="pb-1">Trending Now</p>
                                    <p className="pb-1">Loungewear</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center w-full">
                        <h2>New Arrivals</h2>
                        <img
                            src={
                                expandedSections.newArrivals ? "/icons/Minus.png" : "/icons/Plus.png"
                            }
                            alt=""
                            onClick={() => toggleSection("newArrivals")}
                            className="cursor-pointer"
                        />
                    </div>
                    {expandedSections.newArrivals && (
                        <div className="flex flex-col gap-3 ml-4 pl-4 border-l-2 border-r-gray-400">
                            <p className="pb-1 text-gray-500">Bags</p>
                            <p className="pb-1 text-gray-500">Clothing</p>
                            <p className="pb-1 text-gray-500">Leather Goods</p>
                            <p className="pb-1 text-gray-500">Accessories</p>
                            <p className="pb-1 text-gray-500">Gifts</p>
                            <p className="pb-1 text-gray-500">Shop All</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
