import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Filters({ setShowFilter, onApplyFilters }) {
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const toggleColor = (color) => {
        setSelectedColors((prev) =>
            prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
        );
    };

    const handleMaterial = (material) => setSelectedMaterial(material);
    const handleSize = (size) => setSelectedSize(size);

    const applyFilters = () => {
        onApplyFilters({ colors: selectedColors, material: selectedMaterial, size: selectedSize });
        setShowFilter(false);
    };

    return (
        <div className="flex fixed top-0 right-0 bg-[#5e5e5ed7] h-screen w-screen z-10 flex-row-reverse items-start translate-x-0">
            <div className="flex flex-col bg-white h-screen items-start justify-between w-full md:w-[25%] animate-slide overflow-y-scroll">
                <div className="flex p-4 justify-between items-center border-b-[1px] border-black w-full">
                    <p>Filters</p>
                    <AiOutlineClose src="/icons/X.png" onClick={() => setShowFilter(false)} className="cursor-pointer duration-500 hover:text-red-600" alt="Close" />
                </div>
                <div className="flex flex-col p-8 gap-8">
                    <div className="flex flex-col">
                        <h2 className="mb-6">Color</h2>
                        <div className="flex flex-wrap gap-4">
                            {["red", "green", "yellow", "purple", "black", "blue"].map((color) => (
                                <div
                                    key={color}
                                    className={`flex w-6 h-6 rounded-full cursor-pointer bg-${color}-600 ${
                                        selectedColors.includes(color) ? "ring-2 ring-black" : ""
                                    }`}
                                    onClick={() => toggleColor(color)}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="mb-6">Material</h2>
                        <div className="flex flex-col text-gray-600 gap-4">
                            {["Cotton", "Pima", "Silk"].map((material) => (
                                <p
                                    key={material}
                                    className={`cursor-pointer ${
                                        selectedMaterial === material ? "font-bold" : ""
                                    }`}
                                    onClick={() => handleMaterial(material)}
                                >
                                    {material}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="mb-6">Size</h2>
                        <div className="flex flex-col text-gray-600 gap-4">
                            {["Extra Small", "Small", "Medium", "Large", "Extra Large"].map((size) => (
                                <p
                                    key={size}
                                    className={`cursor-pointer ${
                                        selectedSize === size ? "font-bold" : ""
                                    }`}
                                    onClick={() => handleSize(size)}
                                >
                                    {size}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex w-full p-8 items-center justify-center">
                    <button
                        className="bg-black text-white w-full py-2 text-1xl font-light"
                        onClick={applyFilters}
                    >
                        See Results
                    </button>
                </div>
            </div>
        </div>
    );
}
