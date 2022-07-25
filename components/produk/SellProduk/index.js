import Styles from "./sell.module.css";
import Image from "next/image";

const Sell = () => {
    return(
        <div className={Styles.ContainerTerjual}>

            <div className={Styles.judulProdukTerjual}>
                <label>Product Terjual</label>
            </div>
                    
            <div className={Styles.CardProdukTerjual}>

                <div className={Styles.RowTerjual}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.deskripsiProdukTerjual}>
                        <label>Jam Tangan Casio</label>
                        <p>Aksesoris</p>
                        <h4>Rp 250.000</h4>
                    </div>
                </div>

                <div className={Styles.RowTerjual}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.deskripsiProdukTerjual}>
                        <label>Jam Tangan Casio</label>
                        <p>Aksesoris</p>
                        <h4>Rp 250.000</h4>
                    </div>
                </div>

                <div className={Styles.RowTerjual}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.deskripsiProdukTerjual}>
                        <label>Jam Tangan Casio</label>
                        <p>Aksesoris</p>
                        <h4>Rp 250.000</h4>
                    </div>
                </div>

                </div>

            </div>
    )
}
export default Sell;