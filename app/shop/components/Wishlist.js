'use client';

import { useWishlist } from "@/app/context/WishlistContext";



export default function Wishlist({setWish}) {
    const { wishlist, removeFromWishlist } = useWishlist();

    return (
        <div className="flex fixed z-10 bg-[#5e5e5ed7] flex-row-reverse w-screen h-screen top-0">
            <div className="flex flex-col bg-white w-full md:w-[27%]">
                <div className="flex items-center justify-between border-b p-4">
            <h1 className="text-2xl">Wishlist</h1>
            <img src="/icons/X.png" className="cursor-pointer pr-8" onClick={()=>setWish(false)} alt="" />
                </div>
            {wishlist.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <div className="flex flex-col flex-wrap gap-8 w-full p-8">
                    {wishlist.map((item) => (
                        <div key={item.id} className="flex justify-between items-start gap-6 w-full border-b p-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-[100px] h-[130px] object-contain bg-blue-50"
                            />
                            <div className="flex gap-3 flex-col items-start justify-start">
                            <h2 className="text-sm">{item.name}</h2>
                            <p>{item.category}</p>
                            <p className="text-gray-600">${item.price}</p>
                            <button className="w-full bg-black text-white py-2">Add to Bag</button>
                            </div>
                            <div className="flex">
                                <img src="/icons/X.png" onClick={()=>removeFromWishlist(item.id)} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            )}
            </div>
        </div>
    );
}
