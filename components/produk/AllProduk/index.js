import Styles from "./allproduk.module.css";
import Image from 'next/image';

export default function AllProduk() {
    return(
        <div className={Styles.ContainerAllProduk}>

            <div className={Styles.judulAllProduk}>
                <label>Product</label>
            </div>
                    
            <div className={Styles.CardAllProduk}>

                <div className={Styles.RowAllProduk}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.deskripsiAllProduk}>
                        <label>Jam Tangan Casio</label>
                        <p>Aksesoris</p>
                        <h4>Rp 250.000</h4>
                    </div>
                </div>

                <div className={Styles.RowAllProduk}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.deskripsiAllProduk}>
                        <label>Jam Tangan Casio</label>
                        <p>Aksesoris</p>
                        <h4>Rp 250.000</h4>
                    </div>
                </div>

                <div className={Styles.RowAllProduk}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.deskripsiAllProduk}>
                        <label>Jam Tangan Casio</label>
                        <p>Aksesoris</p>
                        <h4>Rp 250.000</h4>
                    </div>
                </div>

                <div className={Styles.RowAllProduk}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.deskripsiAllProduk}>
                        <label>Jam Tangan Casio</label>
                        <p>Aksesoris</p>
                        <h4>Rp 250.000</h4>
                    </div>
                </div>

                <div className={Styles.RowAllProduk}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.deskripsiAllProduk}>
                        <label>Jam Tangan Casio</label>
                        <p>Aksesoris</p>
                        <h4>Rp 250.000</h4>
                    </div>
                </div>

                <div className={Styles.RowAllProduk}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.deskripsiAllProduk}>
                        <label>Jam Tangan Casio</label>
                        <p>Aksesoris</p>
                        <h4>Rp 250.000</h4>
                    </div>
                </div>

                </div>

            </div>
    )
}
