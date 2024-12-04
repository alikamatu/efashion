export default function Show() {

    return (
        <div className="flex w-full flex-col p-8 justify-center items-center">
            <div className="flex w-full flex-col gap-6 justify-center items-center">
                <h2 className="text-3xl font-bold">Elegant Ease</h2>
                <p className="text-xl">Inspiration for Your Essential Wardrobe</p>
                <div className="flex mt-8 w-full justify-center gap-4 items-center">
                    <img className="w-[43%] h-[70vh] object-cover" src="/assets/sweater.jpg" alt="" />
                    <img className="w-[43%] h-[70vh] object-cover" src="/assets/sweaters.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}