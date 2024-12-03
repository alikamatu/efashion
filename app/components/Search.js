import Result from "./Result";

export default function Search({setShowSearch}) {

    return (
        <div className="flex flex-col w-full absolute top-16 z-10 bg-white">
            <div className="flex justify-between items-center w-full p-8">
                <div className="flex items-center w-full">
                <img src="/icons/MagnifyingGlass.png" className="w-[20px] mr-4" alt="" />
                <input type="text" name="" id="" placeholder="Search..." className="w-[80%] focus:outline-none text-xl"/>
                </div>
                <img src="/icons/X.png" alt="" onClick={()=>setShowSearch(false)} />
            </div>
            <Result />
        </div>
    )
}