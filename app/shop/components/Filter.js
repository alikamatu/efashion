"use client"
import { useState, useRef, useEffect } from "react";
import Sort from "./Sort";
import MobileSort from "./MobileSort";
import Filters from "./Fiilters";

export default function Filter({ onFiltersChange, setSortOption, onCategorySelect }) {
    const [showSort, setShowSort] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const sortRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sortRef.current && !sortRef.current.contains(event.target)) {
                setShowSort(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const categories = [
        "Outerwear",
        "Dresses",
        "Skirts",
        "Pants & Leggings",
        "Stretch",
        "Lounge",
    ];

    return (
        <div className="md:flex justify-between items-center border-b-[1px] border-gray-300 w-full">
            <div className="flex flex-wrap md:flex-none px-6 md:px-12 pb-8 md:pb-4 gap-2">
                {categories.map((category) => (
                    <p
                        key={category}
                        className="border-[1px] rounded-full px-3 border-black cursor-pointer"
                        onClick={() => onCategorySelect(category)}
                    >
                        {category}
                    </p>
                ))}
            </div>
            <div className="flex px-12 gap-24 justify-between md:justify-start relative cursor-pointer">
                <div className="flex items-center gap-2 pb-4" ref={sortRef} onClick={() => setShowSort(true)}>
                    <p>Sort</p>
                    <img src="/icons/CaretDown.png" className="w-4" alt="Sort" />
                    {showSort ? <Sort setSortOption={setSortOption} /> : null}
                </div>
                <p onClick={() => setShowFilter(true)}>Filter</p>
            </div>
            {showSort ? <MobileSort setShowSort={setShowSort} setSortOption={setSortOption} /> : null}
            {showFilter ? <Filters setShowFilter={setShowFilter} onApplyFilters={onFiltersChange} /> : null}
        </div>
    );
}
