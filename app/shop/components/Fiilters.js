export default function Filters({setShowFilter}) {

    return (
        <div className="flex fixed top-0 right-0 bg-[#5e5e5ed7] h-screen w-screen z-10 flex-row-reverse items-start">
            <div className="flex flex-col bg-white h-screen items-start justify-between w-full md:w-[25%]">
                <div className="flex p-6 justify-between items-center border-b-[1px] border-black w-full">
                    <p>Filters</p>
                    <img src="/icons/X.png" onClick={()=>setShowFilter(false)} alt="" />
                </div>
                <div className="flex flex-col p-8 gap-8">
                    <div className="flex flex-col">
                    <h2 className="mb-6">Color</h2>
                    <div className="flex flex-wrap gap-4">
                    <div className="flex bg-red-600 w-6 h-6 rounded-full"></div>
                    <div className="flex bg-green-600 w-6 h-6 rounded-full"></div>
                    <div className="flex bg-yellow-600 w-6 h-6 rounded-full"></div>
                    <div className="flex bg-purple-600 w-6 h-6 rounded-full"></div>
                    <div className="flex bg-black w-6 h-6 rounded-full"></div>
                    <div className="flex bg-green-600 w-6 h-6 rounded-full"></div>
                    <div className="flex bg-blue-700 w-6 h-6 rounded-full"></div>
                    <div className="flex bg-red-600 w-6 h-6 rounded-full"></div>
                    <div className="flex bg-black w-6 h-6 rounded-full"></div>
                    <div className="flex bg-yellow-600 w-6 h-6 rounded-full"></div>
                    <div className="flex bg-purple-600 w-6 h-6 rounded-full"></div>
                    <div className="flex bg-green-600 w-6 h-6 rounded-full"></div>
                    </div>
                    </div>
                    <div className="flex flex-col">
                    <h2 className="mb-6">Material</h2>
                    <div className="flex flex-col  text-gray-600 gap-4">
                        <p>Cotton (4)</p>
                        <p>Pima (6)</p>
                        <p>Silk (2)</p>
                    </div>
                    </div>
                    <div className="flex flex-col">
                    <h2 className="mb-6">Size</h2>
                    <div className="flex flex-col  text-gray-600 gap-4">
                        <p>Extra Small (97)</p>
                        <p>Small (36)</p>
                        <p>Medium (78)</p>
                        <p>Large (28)</p>
                        <p>Extra Large (728)</p>
                    </div>
                    </div>
                </div>
                <div className="flex w-full p-8 items-center justify-center">
                    <button className="bg-black text-white px-12 w-full py-4 text-2xl font-light">See Results</button>
                </div>
            </div>
        </div>
    )
}