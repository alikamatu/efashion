export default function Sort() {

    return (
        <div className="hidden md:flex absolute top-11 right-12 w-full z-10 bg-white drop-shadow-xl p-12 pr-24">
            <div className="flex flex-col gap-8 w-full text-gray-600">
                <p className="hover:text-black cursor-pointer">Featured</p>
                <p className="hover:text-black cursor-pointer">Best Sellers</p>
                <p className="hover:text-black cursor-pointer">Price, low to high</p>
                <p className="hover:text-black cursor-pointer">Price, high to low</p>
            </div>
        </div>
    )
}