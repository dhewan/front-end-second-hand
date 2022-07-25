import { NavBeforeLogin } from "../../components/Navbar/NavBeforeLogin";
import Tambahproduk from "../../components/produk/AddProduk";
import Footer from "../../components/Footer";

export default function tambahproduk() {
    return (
        <div>
            <NavBeforeLogin />
            <Tambahproduk />
            <Footer />
        </div>
    )
}
