import Banner from "./components/Banner";
import Beans from "./components/Beans";
import Collections from "./components/Collections";
import Footer from "./components/Footer";
import Instagram from "./components/Instagram";
import Quote from "./components/Quote";
import WearNow from "./components/WearNow";

export default function Home() {

  return (
    <div className="w-full">
      <Banner />
      <Collections />
      <WearNow />
      <Beans />
      <Quote />
      <Instagram />
      <Footer />
    </div>
  )
}