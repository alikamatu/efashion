"use client"
import { useState } from "react";
import Footer from "../components/Footer";
import Filter from "./components/Filter";
import Product from "./components/Product";

export default function Shop() {
    const [filters, setFilters] = useState({});
    const [sortOption, setSortOption] = useState("featured");
    const [selectedCategory, setSelectedCategory] = useState(null);

    const applyFilters = (newFilters) => setFilters(newFilters);

    return (
        <div className="flex flex-col w-full">
            <div className="flex p-6 md:p-12 pb-2">
                <h1 className="text-3xl">Shop</h1>
            </div>
            <Filter
                onFiltersChange={applyFilters}
                setSortOption={setSortOption}
                onCategorySelect={setSelectedCategory}
            />
            <Product filters={{ ...filters, category: selectedCategory }} sortOption={sortOption} />
            <Footer />
        </div>
    );
}
