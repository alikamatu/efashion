'use client';

import { useRouter } from 'next/navigation';

const Items = [
    {
        id: 1,
        name: "Classic Easy Zipper Tote",
        image: '/assets/image.png',
        price: 299,
        category: "bags",
        color: "black",
        material: "Cotton",
        size: "Medium"
    },
    {
        id: 2,
        name: "Wool Cashmier Sweater Coat",
        image: '/assets/coat.png',
        price: 398,
        category: "Clothing",
        color: "red",
        material: "Wool",
        size: "Large"
    },
    {
        id: 3,
        name: "Single-Origin Cashmere Beanie",
        image: '/assets/cujay.png',
        price: 98,
        category: "Cap",
        color: "yellow",
        material: "Cashmere",
        size: "Small"
    },
    {
        id: 4,
        name: "Alpaca Wool Cropped Cardigan",
        image: '/assets/product.png',
        price: 498,
        category: "Clothing",
        color: "green",
        material: "Alpaca",
        size: "Extra Large"
    }
];

export default function Product({ filters, sortOption }) {
    const router = useRouter();

    const handleProductClick = (id) => {
        router.push(`/product/${id}`);
    };

    const filteredItems = Items.filter((item) => {
        const matchesCategory = !filters.category || item.category === filters.category;
        const matchesColor =
            !filters.colors || filters.colors.length === 0 || filters.colors.includes(item.color);
        const matchesMaterial =
            !filters.material || item.material === filters.material;
        const matchesSize = !filters.size || item.size === filters.size;

        return matchesCategory && matchesColor && matchesMaterial && matchesSize;
    });

    const sortedItems = [...filteredItems].sort((a, b) => {
        switch (sortOption) {
            case "price-low-high":
                return a.price - b.price;
            case "price-high-low":
                return b.price - a.price;
            default:
                return 0; // No sorting for "featured" or "best-sellers"
        }
    });

    return (
        <div className="flex w-full justify-center items-center pt-7 md:pt-12 pb-8">
            <div className="flex flex-wrap w-[90%] items-center md:gap-4 justify-between md:justify-start">
                {sortedItems.length > 0 ? (
                    sortedItems.map((item) => (
                        <div
                            className="flex items-start justify-start w-[48%] md:w-[300px] cursor-pointer"
                            key={item.id}
                            onClick={() => handleProductClick(item.id)}
                        >
                            <div className="flex flex-col">
                                <div className="flex relative w-[100%] md:w-[300px]">
                                    <img
                                        src={item.image}
                                        className="relative w-[100%] object-contain h-[210px] bg-blue-50 md:h-[350px] md:w-[300px]"
                                        alt={item.name}
                                    />
                                    <img src="/icons/Plus.png" className="absolute bottom-4 right-3" alt="View Details" />
                                    <img src="/icons/Heart.png" className="absolute top-4 right-3" alt="Favorite" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xs md:text-sm">{item.name}</p>
                                    <p className="font-semibold text-sm">${item.price}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center w-full text-gray-500">No items match your filters.</p>
                )}
            </div>
        </div>
    );
}
