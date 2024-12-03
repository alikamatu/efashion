"use client"
import { useState } from "react";
import Sort from "./Sort";
import MobileSort from "./MobileSort";
import Filters from "./Fiilters";

export default function Filter() {

    const [showSort, setShowSort] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    
    return (
        <div className="md:flex justify-between items-center border-b-[1px] border-gray-300 w-full">
            <div className="flex flex-wrap md:flex-none px-6 md:px-12 pb-8 md:pb-4 gap-2">
                <p className="border-[1px] rounded-full px-3 border-black">Outerwear</p>
                <p className="border-[1px] rounded-full px-3 border-black">Dresses</p>
                <p className="border-[1px] rounded-full px-3 border-black">Skirts</p>
                <p className="border-[1px] rounded-full px-3 border-black">Pants & Leggings</p>
                <p className="border-[1px] rounded-full px-3 border-black">Stretch</p>
                <p className="border-[1px] rounded-full px-3 border-black">Lounge</p>
            </div>
            <div className="flex px-12 gap-24 justify-between md:justify-start relative cursor-pointer">
                <div className="flex items-center gap-2 pb-4" onClick={()=>setShowSort(true)}>
                <p>Sort</p>
                <img src="/icons/CaretDown.png" className="w-4" alt="" />
                {showSort?<Sort />:""}
                </div>
                <p onClick={()=>setShowFilter(true)}>Filter</p>
            </div>
            {showSort?<MobileSort setShowSort={setShowSort} />:""}
            {showFilter?<Filters setShowFilter={setShowFilter} />:""}
        </div>
    )
}