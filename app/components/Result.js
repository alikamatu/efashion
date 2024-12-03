const Product = [
    {
        id: 1,
        name: "Classic Easy Zipper Tote",
        image: '/assets/image.png',
        price: 299,
        category: "bags"
    },
    {
        id: 2,
        name: "Wool Cashmier Sweater Coat",
        image: '/assets/coat.png',
        price: 398,
        category: "Clothing"
    },
    {
        id: 3,
        name: "Single-Origin Cashmere Beanie",
        image: '/assets/cujay.png',
        price: 98,
        category: "Cap"
    },
    {
        id: 4,
        name: "Alpaca Wool Cropped Cardigan",
        image: '/assets/product.png',
        price: 498,
        category: "Clothing"
    }
]

export default function Result() {

    return (
        <div className="flex w-full p-8">
            <div className="flex flex-col gap-12 w-full">
                <div className="flex w-full text-gray-500 justify-between border-b-[1px] border-b-gray-500 pb-4">
                    <p>13 results</p>
                    <p>View all</p>
                </div>
                <div className="flex flex-wrap w-full items-center gap-4 justify-between md:justify-start">
                {Product.map((items, index) => (
                    <div className="flex items-start justify-start w-[45%] md:w-[300px]" key={index}>
                        <div className="flex flex-col">
                            <div className="flex relative w-[100%] md:w-[300px]">
                            <img src={items.image} className="relative w-[100%] md:w-[300px]" alt="" />
                            <img src="/icons/Plus.png" className="absolute bottom-4 right-3" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-xs md:text-sm">{items.name}</p>
                                <p className="font-semibold text-sm">${items.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}