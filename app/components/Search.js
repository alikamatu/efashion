import React, { useState } from "react";
import Result from "./Result";
import AllProducts from "../data/products";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

export default function Search({ setShowSearch }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleInputChange = (e) => {
        const inputValue = e.target.value.toLowerCase();
        setQuery(inputValue);

        const filteredResults = AllProducts.filter((product) =>
            product.name.toLowerCase().includes(inputValue)
        );

        setResults(filteredResults);
    };

    return (
        <div className="flex flex-col w-full fixed h-screen top-0 z-10 bg-white">
            <div className="flex justify-between items-center w-full p-8">
                <div className="flex items-center w-full">
                    <AiOutlineSearch
                        className="text-4xl w-[20px] mr-4"
                        alt="Search Icon"
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={handleInputChange}
                        className="w-[80%] focus:outline-none text-xl"
                    />
                </div>
                <AiOutlineClose
                    alt="Close"
                    onClick={() => setShowSearch(false)}
                    className="text-2xl cursor-pointer"
                />
            </div>
            <Result results={results} />
        </div>
    );
}
