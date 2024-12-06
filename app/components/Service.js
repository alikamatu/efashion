"use client"
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlinePlus } from "react-icons/ai";
import AllProducts from "../data/products";
import { useWishlist } from "../context/WishlistContext";
import { useRouter } from "next/navigation";

export default function Service() {
    const router = useRouter();
    const { addToWishlist } = useWishlist();
    const [wishlist, setWishlist] = useState([]);
    const [randomProducts, setRandomProducts] = useState([]);
    const [popEffect, setPopEffect] = useState(null);
    useEffect(() => {
        const storedWishlist = localStorage.getItem("wishlist");
        if (storedWishlist) {
            setWishlist(JSON.parse(storedWishlist));
        }
    }, []);

    useEffect(() => {
        const shuffled = [...AllProducts].sort(() => 0.5 - Math.random());
        setRandomProducts(shuffled.slice(0, 4));
    }, []);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const handleProductClick = (id) => {
        router.push(`/product/${id}`);
    };

    const toggleWishlist = (item) => {
        if (wishlist.includes(item.id)) {
            setWishlist(wishlist.filter((id) => id !== item.id));
        } else {
            setWishlist([...wishlist, item.id]); 
            addToWishlist(item); 
            setPopEffect(item.id); 
            setTimeout(() => setPopEffect(null), 300);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center  p-2 md:p-12">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
                {randomProducts.map((item, index) => (
                        <div
                            className={`flex flex-col items-center justify-start w-full bg-white cursor-pointer shadow-lg rounded-lg transition-transform
                                ${index }`}
                            key={item.id}
                            onClick={() => handleProductClick(item.id)}

                        >
                            <div className="relative w-full overflow-hidden group">
                                <img
                                    src={item.image}
                                    className="w-full object-contain h-[210px] md:h-[350px] transition-transform duration-500 ease-in-out"
                                    alt={item.name}
                                />
                                <AiOutlinePlus
                                    className="absolute bottom-4 right-3 text-xl text-gray-600 transition-transform transform"
                                    title="View Details"
                                />
                                {wishlist.includes(item.id) ? (
                                    <AiFillHeart
                                        className={`absolute top-4 right-3 text-xl text-red-600 cursor-pointer transition-transform transform ${
                                            popEffect === item.id ? "animate-pop" : ""
                                        }`}
                                        title="Remove from Wishlist"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleWishlist(item);
                                        }}
                                    />
                                ) : (
                                    <AiOutlineHeart
                                        className="absolute top-4 right-3 text-xl text-gray-600 cursor-pointer transition-transform transform group-hover:scale-125"
                                        title="Add to Wishlist"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleWishlist(item);
                                        }}
                                    />
                                )}
                            </div>
                            <div className="text-center mt-2">
                                <p className="text-xs md:text-sm">{item.name}</p>
                                <p className="font-semibold text-sm">${item.price}</p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}