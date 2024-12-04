export default function Footer() {

    return(
        <div className="md:flex bg-[#b9b9b93d] py-10 md:h-[40vh] justify-center gap-36 border-t-2 border-t-gray-300 items-start">
            <div className="flex flex-col p-10 gap-4 justify-between h-full">
            <div className="md:flex gap-12">
                <div className="flex flex-col gap-2 justify-start">
                    <h2 className="uppercase text-gray-600 pb-4">Contact Us</h2>
                    <p>+233 53 406 5652</p>
                    <p>alikamatu14@gmail.com</p>
                    <p>Mon-Fri 9am-3pm GT</p>
                </div>
                <div className="flex flex-col gap-2 justify-between">
                    <h2 className="uppercase text-gray-600 pb-4 mt-6 md:mt-0">Customers</h2>
                    <p>Start a Return</p>
                    <p>Return Policy</p>
                    <p>FAQ</p>
                    <p>Catalogs and Mailers</p>
                    <p>About Group Gifting</p>
                </div>
                <div className="flex flex-col justify-between gap-2 mt-6 md:mt-0">
                    <h2 className="uppercase text-gray-600 pb-4">Company</h2>
                    <p>About Us</p>
                    <p>Sustainability</p>
                    <p>Discover Revive</p>
                    <p>Careers</p>
                    <p>Policy</p>
                    <p>Terms</p>
                </div>
            </div>
            </div>
            <div className="flex flex-col gap-4 p-10">
                <p>Get the latest news from us</p>
                <input type="email" className="bg-transparent py-4 border-2 border-gray-400 p-3" placeholder="Enter your email address" />
                <p>By signing up you agree to our <span>Privacy Policy</span> and <span>Terms of Service</span></p>
                <button className="bg-black text-white py-3 px-8">Subscribe</button>
            </div>
        </div>
    )
}