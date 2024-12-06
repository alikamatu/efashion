"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function MobileNav({ setShowNav }) {
    const [expandedSections, setExpandedSections] = useState({});
    const router = useRouter();

    const toggleSection = (section) => {
        setExpandedSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    const navigateTo = (path) => {
        setShowNav(false);
        router.push(path);
    };

    return (
        <div className="flex flex-col w-full absolute top-0 z-10 bg-white animate-slideIn">
            <div className="flex flex-row-reverse border-b-2 p-6 border-b-gray-400 h-12 items-center">
                <AiOutlineClose
                    onClick={() => setShowNav(false)}
                    className="cursor-pointer"
                />
            </div>
            <div className="flex flex-col w-full gap-3 p-6">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center w-full">
                        <h2 className="cursor-pointer" onClick={() => navigateTo("/shop")}>
                            Shop
                        </h2>
                        <AiOutlinePlus
                            src={expandedSections.shop ? "/icons/Minus.png" : "/icons/Plus.png"}
                            alt=""
                            onClick={() => toggleSection("shop")}
                            className="cursor-pointer"
                        />
                    </div>
                    {expandedSections.shop && (
                        <div className="overflow-hidden animate-slideDown gap-3">
                            <div className="flex ml-2 justify-between p-2 items-center w-full">
                                <h3 className="text-gray-500 cursor-pointer" onClick={() => navigateTo("/categories")}>
                                    Categories
                                </h3>
                                {
                                        expandedSections.categories ? <AiOutlineMinus onClick={() => toggleSection("categories")} />: <AiOutlinePlus onClick={() => toggleSection("categories")} />

                                }
                            </div>
                            {expandedSections.categories && (
                                <div className="flex flex-col gap-3 ml-4 pl-4 border-l-2 border-gray-400 animate-slideDown">
                                    <p className="pb-1 text-gray-500 cursor-pointer" onClick={() => navigateTo("/cart")}>
                                        Bags
                                    </p>
                                    <p className="pb-1 text-gray-500 cursor-pointer" onClick={() => navigateTo("/clothing")}>
                                        Clothing
                                    </p>
                                    <p className="pb-1 text-gray-500 cursor-pointer" onClick={() => navigateTo("/leather-goods")}>
                                        Leather Goods
                                    </p>
                                    <p className="pb-1 text-gray-500 cursor-pointer" onClick={() => navigateTo("/accessories")}>
                                        Accessories
                                    </p>
                                    <p className="pb-1 text-gray-500 cursor-pointer" onClick={() => navigateTo("/gifts")}>
                                        Gifts
                                    </p>
                                    <p className="pb-1 text-gray-500 cursor-pointer" onClick={() => navigateTo("/shop")}>
                                        Shop All
                                    </p>
                                </div>
                            )}
                            <div className="flex ml-2 justify-between p-2 items-center w-full">
                                <h3 className="text-gray-500 cursor-pointer" onClick={() => navigateTo("/featured")}>
                                    Featured
                                </h3>
                                    {
                                        expandedSections.featured ? <AiOutlineMinus onClick={() => toggleSection("featured")} />: <AiOutlinePlus onClick={() => toggleSection("featured")} />
                                    }
                                    
                            </div>
                            {expandedSections.featured && (
                                <div className="flex text-gray-500 flex-col gap-3 ml-4 pl-4 border-l-2 border-gray-400 animate-slideDown">
                                    <p className="pb-1 cursor-pointer" onClick={() => navigateTo("/new-arrivals")}>
                                        New Arrivals
                                    </p>
                                    <p className="pb-1 cursor-pointer" onClick={() => navigateTo("/bestsellers")}>
                                        Bestsellers
                                    </p>
                                    <p className="pb-1 cursor-pointer" onClick={() => navigateTo("/trending")}>
                                        Trending Now
                                    </p>
                                    <p className="pb-1 cursor-pointer" onClick={() => navigateTo("/loungewear")}>
                                        Loungewear
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center w-full">
                        <h2 className="cursor-pointer" onClick={() => navigateTo("/new-arrivals")}>
                            New Arrivals
                        </h2>
                            {
                                expandedSections.newArrivals ?<AiOutlineMinus onClick={() => toggleSection("newArrivals")} />: <AiOutlinePlus onClick={() => toggleSection("newArrivals")} />
                            }
                    </div>
                    {expandedSections.newArrivals && (
                        <div className="flex flex-col gap-3 ml-4 pl-4 border-l-2 border-gray-400 animate-slideDown">
                            <p className="pb-1 text-gray-500 cursor-pointer" onClick={() => navigateTo("/bags")}>
                                Bags
                            </p>
                            <p className="pb-1 text-gray-500 cursor-pointer" onClick={() => navigateTo("/clothing")}>
                                Clothing
                            </p>
                            <p className="pb-1 text-gray-500 cursor-pointer" onClick={() => navigateTo("/leather-goods")}>
                                Leather Goods
                            </p>
                            <p className="pb-1 text-gray-500 cursor-pointer" onClick={() => navigateTo("/accessories")}>
                                Accessories
                            </p>
                            <p className="pb-1 text-gray-500 cursor-pointer" onClick={() => navigateTo("/gifts")}>
                                Gifts
                            </p>
                            <p className="pb-1 text-gray-500 cursor-pointer" onClick={() => navigateTo("/shop-all")}>
                                Shop All
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
