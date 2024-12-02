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

export default function WearNow() {

    return (
        <div className="flex flex-col p-10 gap-8">
            <div className="flex">
                <p className="text-xl">What to Wear Now</p>
            </div>
            <div className="flex w-full items-center gap-4 justify-center">
                {Product.map((items, index) => (
                    <div className="flex items-start justify-start" key={index}>
                        <div className="flex flex-col">
                            <div className="flex relative">
                            <img src={items.image} className="relative" alt="" />
                            <img src="/icons/plus.png" className="absolute bottom-4 right-3" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <p>{items.name}</p>
                                <p className="font-semibold">${items.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}