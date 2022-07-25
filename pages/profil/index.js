import { NavBeforeLogin } from "../../components/Navbar/Navbar";
import Profil from "../../components/profil"
import Footer from "../../components/Footer";

export default function profil() {
    return (
        <div>
            <NavBeforeLogin />
            <Profil />
            <Footer />
        </div>
    )
}
