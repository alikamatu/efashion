export default function DropDown() {

    return (
        <div className="hidden md:flex w-full p-24 border-t-[1px] border-t-gray-300 bg-white absolute top-16 z-10">
            <div className="flex pl-24 w-full items-start justify-between">
                <div className="flex gap-32">
                <div className="flex flex-col">
                    <h2 className="mb-6 text-gray-400">Categories</h2>
                    <p className="pb-1">Bags</p>
                    <p className="pb-1">Clothing</p>
                    <p className="pb-1">Leather Goods</p>
                    <p className="pb-1">Accessories</p>
                    <p className="pb-1">Gifts</p>
                    <p className="pb-1">Shop All</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="mb-6 text-gray-400">Featured</h2>
                    <p className="pb-1">New Arivals</p>
                    <p className="pb-1">Bestsellers</p>
                    <p className="pb-1">Trending Now</p>
                    <p className="pb-1">Loungewear</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="mb-6 text-gray-400">Collections</h2>
                    <p className="pb-1">Party and Events</p>
                    <p className="pb-1">Office looks</p>
                    <p className="pb-1">Selections</p>
                    <p className="pb-1">Online Exclusive</p>
                    <p className="pb-1">Knitwear</p>
                    <p className="pb-1">Total Looks</p>
                    <p className="pb-1">Basics</p>
                    </div>
                </div>
                <div className="flex">
                    <img src="/assets/Collections.png" className="w-[400px]" alt="" />
                </div>
            </div>
        </div>
    )
}