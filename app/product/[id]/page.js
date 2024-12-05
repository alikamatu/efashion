'use client';
import { use, useState } from "react";
import Footer from "@/app/components/Footer";
import Match from "@/app/shop/components/Match";
import Recent from "@/app/shop/components/Recent";
import Review from "@/app/shop/components/Review";
import Show from "@/app/shop/components/Show";
import { useCart } from "@/app/context/CartContext";

const Items = [
    {
        id: 1,
        name: "Vanz Red Lable",
        images: ["/assets/vans.png", "/assets/vans.png", "/assets/vans.png"], // Array of images
        price: 299,
        category: "Sneaker",
        color: "black",
        material: "Cotton",
        size: "Medium",
        des: "A classic pair of sneakers with a comfortable fit and sleek design."
    },
    {
        id: 2,
        name: "Stark Glasses",
        images: ["/assets/igt.png", "/assets/igt.png", "/assets/igt.png"],
        price: 398,
        category: "Accessory",
        color: "Black",
        material: "Wool",
        size: "Large",
        des: "Stylish glasses offering a sophisticated look, perfect for all occasions."
    },
    {
        id: 3,
        name: "Single-Origin Cashmere Beanie",
        images: ["/assets/sweater.png", "/assets/sweater.png", "/assets/sweater.png"],
        price: 98,
        category: "Clothing",
        color: "red",
        material: "Cashmere",
        size: "Small",
        des: "Luxurious cashmere beanie, soft and perfect for keeping warm in colder months."
    },
    {
        id: 4,
        name: "Nike Air Jordan 1 High",
        images: ["/assets/cujay.png", "/assets/cujay.png", "/assets/cujay.png"],
        price: 498,
        category: "Clothing",
        color: "green",
        material: "Alpaca",
        size: "Extra Large",
        des: "Iconic basketball sneakers that combine comfort with style."
    },
    {
        id: 5,
        name: "Adidas Three Strips",
        images: ["/assets/adid.png", "/assets/adid.png", "/assets/adid.png"],
        price: 250,
        category: "Trouser",
        color: "black",
        material: "Leather",
        size: "Medium",
        des: "Trendy trousers with Adidas' signature stripes, made for durability."
    },
    {
        id: 6,
        name: "Nike Air Jordan 2 High",
        images: ["/assets/air.png", "/assets/air.png", "/assets/air.png"],
        price: 399,
        category: "Sneaker",
        color: "blue",
        material: "Leather",
        size: "Large",
        des: "High-quality leather sneakers with superior comfort and a bold design."
    },
    {
        id: 7,
        name: "Black Cap",
        images: ["/assets/cap.png", "/assets/cap.png", "/assets/cap.png"],
        price: 120,
        category: "Cap",
        color: "beige",
        material: "Straw",
        size: "Medium",
        des: "Casual black cap made from breathable straw material, perfect for sunny days."
    },
    {
        id: 8,
        name: "White Cut Top",
        images: ["/assets/cuttop.png", "/assets/cuttop.png", "/assets/cuttop.png"],
        price: 150,
        category: "Clothing",
        color: "white",
        material: "Denim",
        size: "Large",
        des: "A trendy white cut top made of denim, perfect for casual outings."
    },
    {
        id: 9,
        name: "Camo Cap",
        images: ["/assets/cap.png", "/assets/cap.png", "/assets/cap.png"],
        price: 450,
        category: "Cap",
        color: "brow",
        material: "Leather",
        size: "10",
        des: "Stylish camo cap crafted from durable leather material."
    },
    {
        id: 10,
        name: "Black Luxury Hoddie",
        images: ["/assets/hoddie.png", "/assets/hoddie.png", "/assets/hoddie.png"],
        price: 79,
        category: "Clothing",
        color: "black",
        material: "Cotton",
        size: "Medium",
        des: "Luxurious black hoodie made from soft cotton, perfect for colder weather."
    },
    {
        id: 11,
        name: "Gray Trausers",
        images: ["/assets/tra.png", "/assets/tra.png", "/assets/tra.png"],
        price: 245,
        category: "Trousers",
        color: "gray",
        material: "Fleece",
        size: "Small",
        des: "Comfortable gray fleece trousers for a relaxed yet stylish look."
    },
    {
        id: 12,
        name: "Shirt",
        images: ["/assets/shirt.png", "/assets/shirt.png", "/assets/shirt.png"],
        price: 99,
        category: "Clothing",
        color: "white",
        material: "Silk",
        size: "One Size",
        des: "Elegant white silk shirt, offering both comfort and sophistication."
    },
    {
        id: 13,
        name: "Czer Rolex Watch",
        images: ["/assets/watch.png", "/assets/watch.png", "/assets/watch.png"],
        price: 99,
        category: "Accessory",
        color: "Black",
        material: "Silk",
        size: "One Size",
        des: "A luxurious black watch that combines precision and elegance."
    }
];

export default function ProductDetails({ params }) {
    const { id } = use(params);
    const product = Items.find((item) => item.id === parseInt(id, 10));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const [activeSections, setActiveSections] = useState({
        availability: false,
        fit: false,
        care: false,
        returns: false,
    });

    if (!product) {
        return <p>Product not found.</p>;
    }

    const handleAddToCart = () => {
        if (!selectedColor) {
            alert("Please select a color.");
            return;
        }
        if (!selectedSize) {
            alert("Please select a size.");
            return;
        }

    if (!product) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl font-semibold">Product not found.</p>
            </div>
        );
    }

    addToCart({
        id: product.id,
        name: product.name,
        image: product.images[0],
        price: product.price,
        color: selectedColor,
        size: selectedSize,
        category: product.category,
        quantity,
    });
    alert("Item added to cart.");
};

    const handleSlideChange = (index) => {
        setCurrentIndex(index);
    };

    const toggleSection = (section) => {
        setActiveSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };


    return (
        <div className="flex flex-col w-full">
            <div className="flex w-full justify-center items-center md:p-8">
                <div className="md:flex w-full md:w-[80%] justify-between gap-24 items-start border-b-2 border-gray-500 md:p-8">
                    <div className="hidden md:block relative w-[400px] md:w-[90%] overflow-hidden">
                        <div
                            className="flex transition-transform duration-500"
                            style={{
                                transform: `translateX(-${currentIndex * 950}px)`,
                                width: `${product.images.length * 100}%`,
                            }}
                        >
                            {product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${product.name} - Slide ${index + 1}`}
                                    className="w-[500px] md:w-[950px] h-[500px] md:h-[800px] object-contain"
                                />
                            ))}
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {product.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSlideChange(index)}
                                    className={`w-3 h-3 rounded-full ${
                                        currentIndex === index ? "bg-black" : "bg-gray-300"
                                    }`}
                                ></button>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden relative w-[100%] md:w-[900px] overflow-hidden">
                        <div
                            className="flex transition-transform duration-500"
                            style={{
                                transform: `translateX(-${currentIndex * 400}px)`,
                                width: `${product.images.length * 100}%`,
                            }}
                        >
                            {product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${product.name} - Slide ${index + 1}`}
                                    className="w-[400px] h-[500px] md:h-[800px] object-contain"
                                />
                            ))}
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {product.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSlideChange(index)}
                                    className={`w-3 h-3 rounded-full ${
                                        currentIndex === index ? "bg-black" : "bg-gray-300"
                                    }`}
                                ></button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 w-full md:w-[40%] p-5 md:p-0 items-start justify-start">
                    <div className="flex text-gray-500">Shop/{product.category}</div>
                    <div className="flex flex-col gap-2">
                    <h2 className="text-2xl">{product.name}</h2>
                    <p className="font-semibold">${product.price}</p>
                    </div>
                    <div className="flex">
                        <p>{product.desc}</p>
                    </div>
                    <div className="flex flex-col gap-3 mt-4">
                    <h2 className="font-semibold">Product Color</h2>
                    <div className="flex gap-3">
                        {["red", "green", "yellow", "purple"].map((color) => (
                            <div
                                key={color}
                                className={`flex w-6 h-6 rounded-full bg-${color}-600 cursor-pointer ${
                                    selectedColor === color ? "ring-2 ring-black" : ""
                                }`}
                                onClick={() => setSelectedColor(color)}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Size Selection */}
                <div className="flex flex-col gap-3 mt-4">
                    <h2 className="font-semibold">Product Size</h2>
                    <div className="flex gap-2">
                        {["XS", "S", "M", "L", "XL"].map((size) => (
                            <p
                                key={size}
                                className={`border-2 p-2 w-8 h-8 flex items-center justify-center cursor-pointer ${
                                    selectedSize === size ? "border-black" : "border-gray-500"
                                }`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4 mt-4">
                    <button
                        className="border p-2"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    >
                        -
                    </button>
                    <p>{quantity}</p>
                    <button className="border p-2" onClick={() => setQuantity((q) => q + 1)}>
                        +
                    </button>
                </div>

                {/* Add to Cart Button */}
                <div className="flex w-full mt-4">
                    <button className="bg-black text-white w-full py-2" onClick={handleAddToCart}>
                        Add to Bag
                    </button>
                </div>
                <div className="flex flex-col gap-3 w-full">
            {/* Check In-Store Availability */}
            <div className="flex flex-col w-full">
                <div
                    className="flex justify-between w-full items-center cursor-pointer"
                    onClick={() => toggleSection("availability")}
                    aria-expanded={activeSections.availability}
                    role="button"
                >
                    <h2>Check In-Store Availability</h2>
                    <img
                        src={activeSections.availability ? "/icons/CaretUp.png" : "/icons/CaretDown.png"}
                        alt={activeSections.availability ? "Collapse" : "Expand"}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-max-height duration-300 ${
                        activeSections.availability ? "max-h-40" : "max-h-0"
                    }`}
                    aria-hidden={!activeSections.availability}
                >
                    <p className="text-gray-500 mt-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dicta repellendus iure
                        quaerat quae ipsa pariatur veniam assumenda ex sint sequi earum dolore quas provident
                        voluptas aliquid hic, aut in!
                    </p>
                </div>
            </div>

            {/* Fit Details */}
            <div className="flex flex-col w-full">
                <div
                    className="flex justify-between w-full items-center cursor-pointer"
                    onClick={() => toggleSection("fit")}
                    aria-expanded={activeSections.fit}
                    role="button"
                >
                    <h2>Fit Details</h2>
                    <img
                        src={activeSections.fit ? "/icons/CaretUp.png" : "/icons/CaretDown.png"}
                        alt={activeSections.fit ? "Collapse" : "Expand"}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-max-height duration-300 ${
                        activeSections.fit ? "max-h-40" : "max-h-0"
                    }`}
                    aria-hidden={!activeSections.fit}
                >
                    <p className="text-gray-500 mt-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dicta repellendus iure
                        quaerat quae ipsa pariatur veniam assumenda ex sint sequi earum dolore quas provident
                        voluptas aliquid hic, aut in!
                    </p>
                </div>
            </div>

            {/* Fabrication & Care */}
            <div className="flex flex-col w-full">
                <div
                    className="flex justify-between w-full items-center cursor-pointer"
                    onClick={() => toggleSection("care")}
                    aria-expanded={activeSections.care}
                    role="button"
                >
                    <h2>Fabrication & Care</h2>
                    <img
                        src={activeSections.care ? "/icons/CaretUp.png" : "/icons/CaretDown.png"}
                        alt={activeSections.care ? "Collapse" : "Expand"}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-max-height duration-300 ${
                        activeSections.care ? "max-h-40" : "max-h-0"
                    }`}
                    aria-hidden={!activeSections.care}
                >
                    <p className="text-gray-500 mt-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dicta repellendus iure
                        quaerat quae ipsa pariatur veniam assumenda ex sint sequi earum dolore quas provident
                        voluptas aliquid hic, aut in!
                    </p>
                </div>
            </div>

            {/* Shopping and Returns */}
            <div className="flex flex-col w-full">
                <div
                    className="flex justify-between w-full items-center cursor-pointer"
                    onClick={() => toggleSection("returns")}
                    aria-expanded={activeSections.returns}
                    role="button"
                >
                    <h2>Shopping and Returns</h2>
                    <img
                        src={activeSections.returns ? "/icons/CaretUp.png" : "/icons/CaretDown.png"}
                        alt={activeSections.returns ? "Collapse" : "Expand"}
                    />
                </div>
                <div
                    className={`overflow-hidden transition-max-height duration-300 ${
                        activeSections.returns ? "max-h-40" : "max-h-0"
                    }`}
                    aria-hidden={!activeSections.returns}
                >
                    <p className="text-gray-500 mt-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dicta repellendus iure
                        quaerat quae ipsa pariatur veniam assumenda ex sint sequi earum dolore quas provident
                        voluptas aliquid hic, aut in!
                    </p>
                </div>
            </div>
        </div>
                </div>
            </div>
        </div>
        <div className="flex w-full justify-center items-center">
        <div className="md:flex w-full md:w-[80%]  gap-32 p-8 items-center justify-between">
            <div className="flex flex-col gap-4">
                <h2 className="uppercase text-black font-thin">Design</h2>
                <h3 className="text-xl">Airy & Worm</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, nobis? Dolores tempore reiciendis dolore unde incidunt ipsam repellat vitae nulla necessitatibus quod! Non unde cumque facere corporis nisi consectetur dicta.
                Blanditiis in natus, nam veniam amet, voluptate rem laudantium quod voluptatum accusamus harum repellendus praesentium odit, ullam porro! Enim, nihil. Quas quis aliquam eos eveniet a facere voluptatum commodi excepturi.</p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="uppercase text-black font-thin mt-6 md:mt-0">Quality</h2>
                <h3 className="text-xl">Made In Italy</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, nobis? Dolores tempore reiciendis dolore unde incidunt ipsam repellat vitae nulla necessitatibus quod! Non unde cumque facere corporis nisi consectetur dicta.
                Blanditiis in natus, nam veniam amet, voluptate rem laudantium quod voluptatum accusamus harum repellendus praesentium odit, ullam porro! Enim, nihil. Quas quis aliquam eos eveniet a facere voluptatum commodi excepturi.</p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="uppercase text-black font-thin mt-6 md:mt-0">Sustainbility</h2>
                <h3 className="text-xl">Sustainable Baby Alpaca</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, nobis? Dolores tempore reiciendis dolore unde incidunt ipsam repellat vitae nulla necessitatibus quod! Non unde cumque facere corporis nisi consectetur dicta.
                Blanditiis in natus, nam veniam amet, voluptate rem laudantium quod voluptatum accusamus harum repellendus praesentium odit, ullam porro! Enim, nihil. Quas quis aliquam eos eveniet a facere voluptatum commodi excepturi.</p>
            </div>
        </div>
        </div>
        <Review />
        <Show />
        <Match />
        <Recent />
        <Footer />
       </div>
    );
}