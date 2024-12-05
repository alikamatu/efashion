"use client";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useState } from "react";
import Search from "./Search";
import DropDown from "./DropDown";
import Wishlist from "../shop/components/Wishlist";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"; // Import React Icons
import { BsBag } from "react-icons/bs"; // Icon for bag
import { FaStore } from "react-icons/fa"; // Icon for store

export default function Navbar() {
    const [ShowNav, setShowNav] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [Drop, showDrop] = useState(false);
    const [Wish, setWish] = useState(false);

    return (
        <div className="flex-col">
            <div className="flex w-full">
                <div className="flex p-6 px-8 w-full justify-between items-center">
                    {/* Mobile menu icon */}
                    <AiOutlineMenu 
                        onClick={() => setShowNav(true)} 
                        className="md:hidden text-2xl cursor-pointer" 
                        title="Open Menu" 
                    />

                    {/* Desktop navigation */}
                    <div className="hidden md:flex gap-4">
                        <img src="/icons/Logo.png" alt="Logo" />
                        <ul className="flex gap-4">
                            <Link href='/shop' onMouseEnter={() => showDrop(false)}>
                                <li>Shop</li>
                            </Link>
                            <Link href='/'>
                                <li>New Arrivals</li>
                            </Link>
                            <Link href='/'>
                                <li>Sales</li>
                            </Link>
                            <Link href='/'>
                                <li>Journal</li>
                            </Link>
                        </ul>
                    </div>

                    {/* Mobile logo */}
                    <div className="flex">
                        <img className="md:hidden" src="/icons/Logo.png" alt="Logo" />
                    </div>

                    {/* Action icons */}
                    <div className="flex items-center gap-4">
                        <AiOutlineSearch 
                            onClick={() => setShowSearch(true)} 
                            className="text-2xl cursor-pointer" 
                            title="Search" 
                        />
                        <Link href='/'>
                            <li className="list-none flex items-center gap-2">
                                <FaStore className="text-lg" title="Stores" /> Stores
                            </li>
                        </Link>
                        <AiOutlineHeart 
                            onClick={() => setWish(true)} 
                            className="text-2xl cursor-pointer text-red-500" 
                            title="Wishlist" 
                        />
                        <Link href='/cart'>
                            <BsBag className="text-2xl cursor-pointer" title="Bag" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Conditional components */}
            {ShowNav ? <MobileNav setShowNav={setShowNav} /> : ""}
            {showSearch ? <Search setShowSearch={setShowSearch} /> : ""}
            {Drop ? <DropDown /> : ""}
            {Wish ? <Wishlist setWish={setWish} /> : ""}
        </div>
    );
}
