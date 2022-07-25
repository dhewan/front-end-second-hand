
import { NavBeforeLogin } from "../components/Navbar/NavBeforeLogin"
import Diskon from "../components/Carousel-Home/Diskon";
import ListProduct from "../components/Homepage/Product";
import FloatingButton from "../components/buttonJual/floatingButton";
import Footer from "../components/Footer"

export default function Home() {
    return (
      <>
        <NavBeforeLogin/>
        <Diskon/>
        <ListProduct/>
        <FloatingButton/>
        <Footer/>
      </>
  );
}

