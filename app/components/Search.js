export default function Search() {

    return (
        <div className="flex w-full">
            <div className="flex justify-between items-center w-full p-8">
                <div className="flex items-center w-full">
                <img src="/icons/MagnifyingGlass.png" className="w-[20px] mr-4" alt="" />
                <input type="text" name="" id="" placeholder="Search..." className="w-[80%] focus:outline-none text-xl"/>
                </div>
                <img src="/icons/X.png" alt="" />
            </div>
        </div>
    )
}