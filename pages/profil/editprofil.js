
import { NavBeforeLogin } from "../../components/Navbar/NavBeforeLogin";
import EditProfil from '../../components/editprofil';
import Footer from "../../components/Footer";

export default function editprofil() {
  return (
    <div>
        <NavBeforeLogin />
        <EditProfil />
        <Footer />
    </div>
  )
}
