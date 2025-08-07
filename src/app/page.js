// import Image from "next/image";
import Navbar from "./component/nav";
import Footer from "./component/footer";
import Home_comp from './component/home';
import Hero from "./component/hero";

export default function Home() {
  return (
    <div className="bg-gray-50">
<Navbar/>

{/* <Hero/> */}

<Home_comp/>

<Footer/>
    </div>
  );
}
