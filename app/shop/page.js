import Footer from "../components/Footer";
import Filter from "./components/Filter";
import Product from "./components/Product";

export default function Shop() {

    return (
        <div className="flex flex-col w-full">
            <div className="flex p-6 md:p-12 pb-2">
                <h1 className="text-3xl">Shop</h1>
            </div>
            <Filter />
            <Product />
            <Footer />
        </div>
    )
}