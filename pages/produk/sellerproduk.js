import { NavBeforeLogin } from "../../components/Navbar/NavBeforeLogin";
import Halamanseller from "../../components/HalamanProduk/Seller"
import Footer from "../../components/Footer";

export default function sellerproduk() {
    return (
        <div>
            <NavBeforeLogin />
            <Halamanseller />
            <Footer />
        </div>
    )
}
