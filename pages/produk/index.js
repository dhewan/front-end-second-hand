import { NavBeforeLogin } from "../../components/Navbar/NavBeforeLogin";
import Produk from "../../components/produk"
import Footer from "../../components/Footer";

export default function index() {
    return (
        <div>
            <NavBeforeLogin />
            <Produk />
            <Footer />
        </div>
    )
}
