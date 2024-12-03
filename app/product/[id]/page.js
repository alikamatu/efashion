const Items = [
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
];

export default function ProductDetails({ params }) {
    const { id } = params;

    const product = Items.find((item) => item.id === parseInt(id, 10));

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <img src={product.image} alt={product.name} className="w-64 h-64 object-cover" />
            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
            <p className="text-gray-600 mt-2">${product.price}</p>
            <p className="text-gray-500 mt-4">Category: {product.category}</p>
        </div>
    );
}
