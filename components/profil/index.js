import Styles from "./profil.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Profil = () => {
    return (
        <div className={Styles.containerProfil}>

            <div className={Styles.dashboardProfil}>
                <Image src="/logo.jpg" width={350} height={350} />
            </div>

            <div className={Styles.bodyProfil}>
                <h3 className={Styles.text}>Profil Kamu</h3>
                <hr className={Styles.garisHori} />

                <div className={Styles.KontenProfil}>

                    <div className={Styles.RowProfil1}>
                        <div className={Styles.Konten1}>
                            <label>Username</label>
                            <p className={Styles.textKonten}>Dhaniel Yesyurun Bawias</p>
                            <hr className={Styles.Batas} />
                        </div>
                        <div className={Styles.Konten2}>
                            <label>Alamat Email</label>
                            <p className={Styles.textKonten}>aku@gmail.co.id</p>
                            <hr className={Styles.Batas}  />
                        </div>
                        <div className={Styles.Konten3}>
                            <label>Tanggal Lahir</label>
                            <p className={Styles.textKonten}>20 april 2022</p>
                            <hr className={Styles.Batas}  />
                        </div>
                    </div>

                    <div className={Styles.garis}>
                        <hr className={Styles.garisVerti} />
                    </div>

                    <div className={Styles.RowProfil2}>
                        <div className={Styles.Konten1}>
                            <label>No Hp</label>
                            <p className={Styles.textKonten}>0812345678</p>
                            <hr className={Styles.Batas}  />
                        </div>
                        <div className={Styles.Konten2}>
                            <label>Kota</label>
                            <p className={Styles.textKonten}>Jakarta</p>
                            <hr className={Styles.Batas}  />
                        </div>
                        <div className={Styles.Konten3}>
                            <label>Alamat</label>
                            <p className={Styles.textKonten}>jln politeknik, lingkungan 7 lorong cinderella</p>
                        </div>
                    </div>

                </div>

                <Link href="/profil/editprofil"><button className={Styles.Tombol}>Edit Profil Kamu</button></Link>
                
            </div>

        </div>
    )
}
export default Profil;