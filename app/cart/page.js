'use client';

import CartWear from "../components/CartWear";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import Recent from "../shop/components/Recent";


export default function Cart() {
    const { cart, updateQuantity, removeFromCart } = useCart();

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <h1 className="text-2xl m-8 md:mb-6">Shoping Bag</h1>
            {cart.length === 0 ? (
                <p>Your shoping bag is empty.</p>
            ) : (
                <div className="flex md:mt-6 w-full">
                    <div className="flex flex-col w-full justify-center items-center">
                        <div className="md:flex w-full md:w-[80%] p-8 justify-between items-start">
                            <div className=" md:flex w-full md:w-[70%] justify-center items-center">
                                <div className="md:flex flex-wrap justify-center items-center gap-2 w-full">
                                    {cart.map((item) => (
                                        <div key={`${item.id}-${item.size}`} className="flex flex-col p-4 border w-full mt-2 md:mt-0 md:w-[45%] gap-3">
                                            <div className="flex w-full justify-between items-center">
                                                <p className="text-xl">{item.name}</p>
                                                <img src="/icons/X.png" onClick={() => removeFromCart(item.id, item.size)} className="cursor-pointer" alt="" />
                                            </div>
                                            <div className="flex justify-center items-center w-full">
                                                <p  className="text-xs text-gray-400">{item.category} / {item.size} / {item.color}</p>
                                            </div>
                                            <div className="flex justify-center items-center">
                                                <img src={item.image} className="w-[250px] h-[300px] bg-blue-50 object-contain" alt="" />
                                            </div>
                                            <div className="flex items-center justify-center border-b pb-3 ">
                                                <div className="flex gap-3 p-1 px-4 border rounded-full">
                                                <button onClick={() => updateQuantity(item.id, item.size, Math.max(1, item.quantity - 1))}>
                                                -
                                            </button>
                                            <p>{item.quantity}</p>
                                            <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>+</button>
                                                </div>
                                        </div>
                                        <div className="flex w-full justify-between items-center">
                                            <p className="text-gray-400">Subtotal</p>
                                            <p className="text-gray-400">{item.price * item.quantity}</p>
                                        </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="md:flex w-full mt-6 md:mt-0 md:w-[30%]">
                                <div className="flex flex-col w-full gap-4">
                                    <div className="flex w-full flex-col border rounded-sm">
                                        <div className="flex w-full justify-center items-center border-b p-4">
                                        <p>Order Summary</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full border-b p-4">
                                            <p>Subtotal</p>
                                            <p>${totalPrice}</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full border-b p-4">
                                            <p>Bag Total</p>
                                            <p>${totalPrice}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col border gap-4 rounded-xl p-4">
                                        <p>Add a gift message to your order</p>
                                        <textarea name="" className="w-full border h-32 p-3 focus:outline-none" id=""></textarea>
                                    </div>
                                    <p className="text-gray-400">Shipping & and taxes calculated at checkout</p>
                                    <button className="w-full bg-black text-white py-2">Go to Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                // <div>
                //     {cart.map((item) => (
                //         <div key={`${item.id}-${item.size}`} className="flex items-center justify-between mb-4">
                //             <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                //             <div>
                //                 <p>{item.name}</p>
                //                 <p>Size: {item.size}</p>
                //                 <p>${item.price}</p>
                //             </div>
                //             <div className="flex items-center gap-2">
                //                 <button onClick={() => updateQuantity(item.id, item.size, Math.max(1, item.quantity - 1))}>
                //                     -
                //                 </button>
                //                 <p>{item.quantity}</p>
                //                 <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>+</button>
                //             </div>
                //             <p>${item.price * item.quantity}</p>
                //             <button >Remove</button>
                //         </div>
                //     ))}
                //     <h2 className="text-xl mt-4">Total: ${totalPrice}</h2>
                // </div>
            )}
            <Recent />
            <Footer />
        </div>
    );
}
