import Footer from "@/app/components/Footer";
import Match from "@/app/shop/components/Match";
import Recent from "@/app/shop/components/Recent";
import Review from "@/app/shop/components/Review";
import Show from "@/app/shop/components/Show";

const Items = [
    {
        id: 1,
        name: "Classic Easy Zipper Tote",
        image: '/assets/image.png',
        desc: "By making these updates, your product details page will function correctly in the App Router without runtime errors.",
        price: 299,
        category: "bags"
    },
    {
        id: 2,
        name: "Wool Cashmier Sweater Coat",
        image: '/assets/coat.png',
        price: 398,
        desc: "By making these updates, your product details page will function correctly in the App Router without runtime errors.",
        category: "Clothing"
    },
    {
        id: 3,
        name: "Single-Origin Cashmere Beanie",
        image: '/assets/cujay.png',
        desc: "By making these updates, your product details page will function correctly in the App Router without runtime errors.",
        price: 98,
        category: "Cap"
    },
    {
        id: 4,
        name: "Alpaca Wool Cropped Cardigan",
        desc: "By making these updates, your product details page will function correctly in the App Router without runtime errors.",
        image: '/assets/product.png',
        price: 498,
        category: "Clothing"
    }
];

export default function ProductDetails({ params }) {
    const { id } = params;

    const product = Items.find((item) => item.id === parseInt(id, 10));

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
       <div className="flex flex-col w-full">
        <div className="flex w-full justify-center md:p-8">
            <div className="md:flex w-full md:w-[80%] justify-between items-start border-b-2 border-gray-500 md:p-8">
                <div className="flex w-full md:w-[65%]">
                    <div className="flex flex-col w-full gap-2">
                        <img src={product.image} className="w-full h-[500px] md:h-[800px] object-contain bg-blue-50" alt="" />
                        <img src={product.image} className="hidden md:block w-full h-[400px] md:h-[800px] object-contain bg-blue-50" alt="" />
                        <img src={product.image} className="hidden md:block w-full h-[400px] md:h-[800px] object-contain bg-blue-50" alt="" />
                        <img src={product.image} className="hidden md:block w-full h-[400px] md:h-[800px] object-contain bg-blue-50" alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-8 w-full md:w-[30%] p-5 md:p-0 items-start justify-start">
                    <div className="flex text-gray-500">Shop/{product.category}</div>
                    <div className="flex flex-col gap-2">
                    <h2 className="text-2xl">{product.name}</h2>
                    <p className="font-semibold">${product.price}</p>
                    </div>
                    <div className="flex">
                        <p>{product.desc}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="font-semibold">Product Color</h2>
                        <div className="flex gap-3">
                            <div className="flex bg-red-600 w-6 h-6 rounded-full"></div>
                            <div className="flex bg-green-600 w-6 h-6 rounded-full"></div>
                            <div className="flex bg-yellow-600 w-6 h-6 rounded-full"></div>
                            <div className="flex bg-purple-600 w-6 h-6 rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="font-semibold">Product Size</h2>
                        <div className="flex gap-2">
                            <p className="border-2 border-gray-500 p-2 w-8 h-8 flex flex-col items-center justify-center">XS</p>
                            <p className="border-2 border-gray-500 p-2 w-8 h-8 flex flex-col items-center justify-center">X</p>
                            <p className="border-2 border-gray-500 p-2 w-8 h-8 flex flex-col items-center justify-center">M</p>
                            <p className="border-2 border-gray-500 p-2 w-8 h-8 flex flex-col items-center justify-center">L</p>
                            <p className="border-2 border-gray-500 p-2 w-8 h-8 flex flex-col items-center justify-center">XL</p>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <button className="bg-black text-white w-full py-2">Add to Bag</button>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <div className="flex flex-col w-full gap-3">
                        <div className="flex justify-between w-full">
                            <h2>Check In-Store Availability</h2>
                            <img src="/icons/CaretDown.png" alt="" />
                        </div>
                        <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dicta repellendus iure quaerat quae ipsa pariatur veniam assumenda ex sint sequi earum dolore quas provident voluptas aliquid hic, aut in!</p>
                        </div>
                        <div className="flex flex-col w-full gap-3">
                        <div className="flex justify-between w-full">
                            <h2>Fit Details</h2>
                            <img src="/icons/CaretDown.png" alt="" />
                        </div>
                        <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dicta repellendus iure quaerat quae ipsa pariatur veniam assumenda ex sint sequi earum dolore quas provident voluptas aliquid hic, aut in!</p>
                        </div>
                        <div className="flex flex-col w-full gap-3">
                        <div className="flex justify-between w-full">
                            <h2>Farication & Care</h2>
                            <img src="/icons/CaretDown.png" alt="" />
                        </div>
                        <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dicta repellendus iure quaerat quae ipsa pariatur veniam assumenda ex sint sequi earum dolore quas provident voluptas aliquid hic, aut in!</p>
                        </div>
                        <div className="flex flex-col w-full gap-3">
                        <div className="flex justify-between w-full">
                            <h2>Shoping and Returns</h2>
                            <img src="/icons/CaretDown.png" alt="" />
                        </div>
                        <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dicta repellendus iure quaerat quae ipsa pariatur veniam assumenda ex sint sequi earum dolore quas provident voluptas aliquid hic, aut in!</p>
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
