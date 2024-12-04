'use client';

import { useWishlist } from "../context/WishlistContext";


export default function Wishlist() {
    const { wishlist, removeFromWishlist } = useWishlist();

    return (
        <div className="p-8">
            <h1 className="text-3xl mb-8">Wishlist</h1>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <div className="flex flex-wrap gap-8">
                    {wishlist.map((item) => (
                        <div key={item.id} className="border p-4 w-[300px]">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-[200px] object-contain bg-blue-50"
                            />
                            <h2 className="text-xl mt-4">{item.name}</h2>
                            <p className="text-gray-600">${item.price}</p>
                            <button
                                className="bg-red-500 text-white mt-4 px-4 py-2 w-full"
                                onClick={() => removeFromWishlist(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
