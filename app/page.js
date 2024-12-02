import Banner from "./components/Banner";
import Collections from "./components/Collections";
import WearNow from "./components/WearNow";

export default function Home() {

  return (
    <div className="w-full">
      <Banner />
      <Collections />
      <WearNow />
    </div>
  )
}