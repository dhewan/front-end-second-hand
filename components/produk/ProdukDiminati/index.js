import Styles from "./minat.module.css";
import Image from "next/image";


export default function Intersted() {
    return(
        <div className={Styles.ContainerMinat}>

            <div className={Styles.judulProdukMinat}>
                <label>Product Diminati</label>
            </div>

            <div className={Styles.CardProdukMinat}>

                <div className={Styles.RowMinat}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.deskripsiProdukMinat}>
                        <label>Jam Tangan Casio</label>
                        <p>Aksesoris</p>
                        <h4>Rp 250.000</h4>
                    </div>
                </div>

                <div className={Styles.RowMinat}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.deskripsiProdukMinat}>
                        <label>Jam Tangan Casio</label>
                        <p>Aksesoris</p>
                        <h4>Rp 250.000</h4>
                    </div>
                </div>

                <div className={Styles.RowMinat}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.deskripsiProdukMinat}>
                        <label>Jam Tangan Casio</label>
                        <p>Aksesoris</p>
                        <h4>Rp 250.000</h4>
                    </div>
                </div>

            </div>

        </div>
    )
}
