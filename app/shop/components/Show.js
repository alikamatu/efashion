export default function Show() {

    return (
        <div className="flex w-full flex-col md:p-8 justify-center items-center">
            <div className="flex w-full flex-col gap-6 justify-center items-center">
                <h2 className="text-3xl font-bold">Elegant Ease</h2>
                <p className="text-xl">Inspiration for Your Essential Wardrobe</p>
                <div className="md:flex mt-8 w-full justify-center gap-4 items-center">
                    <img className="w-full p-1 md:p-0 md:w-[43%] h-[50vh] md:h-[70vh] object-cover" src="/assets/sweater.jpg" alt="" />
                    <img className="w-full p-1 md:p-0 md:w-[43%] h-[50vh] md:h-[70vh] object-cover" src="/assets/sweaters.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}