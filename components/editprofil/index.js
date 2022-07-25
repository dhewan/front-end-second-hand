import Styles from "./editprofil.module.css";
import Image from "next/image";

export default function EditProfil () {
    return (
        <div className={Styles.editprofil}>

            <div className={Styles.DashEditProfil}>
                <Image src="/logo.jpg" width={350} height={350} />
                <input type="file" id={Styles.file} />
                <label for={Styles.file} id={Styles.uploadBtn}>Choose Photo</label>
            </div>

            <form className={Styles.BodyEditProfil}>
                <div className={Styles.UserEditProfil}>
                    <label>Username</label>
                    <input type="email" placeholder="Masukan Username Anda" />
                </div>
                <div className={Styles.NamaEditProfil}>
                    <label>Nama Anda</label>
                    <input placeholder="Masukan Nama Lengkap Anda" />
                </div>
                <div className={Styles.AlamatEditProfil}>
                    <label>Alamat</label>
                    <textarea placeholder="Masukan Alamat Anda" />
                </div>
                <div className={Styles.NoHpEditProfil}>
                    <label>No HandPhone</label>
                    <input type="number" placeholder="Masukan No Hp Anda" />
                </div>
                <div className={Styles.TanggalEditProfil}>
                    <label>Tanggal Lahir</label>
                    <input type="date" />
                </div>
                <div className={Styles.KotaEditProfil}>
                    <label>Kota</label>
                    <input placeholder="Masukan Kota Anda" />
                </div>
                <button className={Styles.submit}>Submit</button>
            </form>

        </div>
    )
};
