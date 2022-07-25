import { NavBeforeLogin } from "../../components/Navbar/NavBeforeLogin";
import Product from "../../components/HalamanProduk"
import Footer from "../../components/Footer";

export default function HalamanProduk() {
    return (
        <div>
            <NavBeforeLogin />
            <Product />
            <Footer />
        </div>
    )
}
