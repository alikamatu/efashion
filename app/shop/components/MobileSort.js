export default function MobileSort({setShowSort}) {

    return (
        <div className="flex md:hidden flex-col-reverse fixed top-0 w-screen h-screen bg-[#5e5e5ed7] z-10">
            <div className="flex flex-col bg-white">
                <div className="flex p-4 border-b-[1px] border-gray-300 w-full justify-between">
                    <p className="text-xl">Sort</p>
                    <img src="/icons/X.png" onClick={()=>setShowSort(false)} alt="" />
                </div>
                <div className="flex flex-col gap-8 p-10 w-full text-gray-600">
                <p className="hover:text-black cursor-pointer">Featured</p>
                <p className="hover:text-black cursor-pointer">Best Sellers</p>
                <p className="hover:text-black cursor-pointer">Price, low to high</p>
                <p className="hover:text-black cursor-pointer">Price, high to low</p>
            </div>
            </div>
        </div>
    )
}