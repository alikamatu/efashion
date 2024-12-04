import Recent from "../shop/components/Recent";

export default function CartWear() {

    return (
        <div className="flex mt-16 justify-center items-center w-full">
            <p className="text-3xl">What to Wear</p>
            <div className="flex">
                <Recent />
            </div>
        </div>
    )
}