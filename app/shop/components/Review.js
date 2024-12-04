export default function Review() {

    return (
        <div className="flex p-8">
            <div className="flex flex-col gap-20">
                <div className="flex flex-col">
                    <div className="flex">
                        <p>4.4</p>
                        <img className="w-3 object-contain" src="/icons/Star.png" alt="" />
                        <img className="w-3 object-contain" src="/icons/Star.png" alt="" />
                        <img className="w-3 object-contain" src="/icons/Star.png" alt="" />
                        <img className="w-3 object-contain" src="/icons/Star.png" alt="" />
                        <img className="w-3 object-contain" src="/icons/StarHalf.png" alt="" />
                    </div>
                    <p>Based on 14 reviews</p>
                </div>
                <div className="flex justify-between items-center gap-32 border-b-2 border-gray-500 p-8">
                    <div className="flex flex-col w-[15%]">
                        <h2 className="text-xl">Alikamatu O.</h2>
                        <p className="text-xs text-gray-600">Verified Buyer</p>
                    </div>
                    <div className="flex flex-col w-[50%]">
                        <div className="flex">
                        <img className="w-3 object-contain" src="/icons/Star.png" alt="" />
                        <img className="w-3 object-contain" src="/icons/Star.png" alt="" />
                        <img className="w-3 object-contain" src="/icons/Star.png" alt="" />
                        <img className="w-3 object-contain" src="/icons/Star.png" alt="" />
                        <img className="w-3 object-contain" src="/icons/Star.png" alt="" />
                        <p className="text-xl pl-2">Perfect Essentials</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident incidunt earum sit quam ducimus. Iure, culpa eveniet. Eos consectetur sit quod quis nostrum est at natus, blanditiis libero tenetur quas!</p>
                    </div>
                    <div className="flex">12/12/2025</div>
                </div>
                <div className="flex justify-between items-center gap-32 border-b-2 border-gray-500 p-8">
                    <div className="flex flex-col w-[15%]">
                        <h2 className="text-xl">Alikamatu O.</h2>
                        <p className="text-xs text-gray-600">Verified Buyer</p>
                    </div>
                    <div className="flex flex-col w-[50%]">
                        <div className="flex">
                        <img className="w-3 object-contain" src="/icons/Star.png" alt="" />
                        <img className="w-3 object-contain" src="/icons/Star.png" alt="" />
                        <img className="w-3 object-contain" src="/icons/Star.png" alt="" />
                        <img className="w-3 object-contain" src="/icons/Star.png" alt="" />
                        <img className="w-3 object-contain" src="/icons/Star.png" alt="" />
                        <p className="text-xl pl-2">Perfect Essentials</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident incidunt earum sit quam ducimus. Iure, culpa eveniet. Eos consectetur sit quod quis nostrum est at natus, blanditiis libero tenetur quas!</p>
                    </div>
                    <div className="flex">12/12/2025</div>
                </div>
            </div>
        </div>
    )
}