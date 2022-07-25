import Styles from "./notif.module.css";

export default function Notifikasi() {
    return (
        <div className={Styles.ContainerNotif}>

            <div className={Styles.BodyNotif}>
                <div className={Styles.RowNotif}>
                    <div className={Styles.ColNotif}>
                        <img src="/Assets/jam.png" />
                        <div className={Styles.DetailNtofiProduk}>
                            <h4>Penawar Produk</h4>
                            <label>Jam Tangan Casio</label>
                            <label>Harga : Rp 250.000</label>
                            <label>Ditawar : Rp 200.000</label>
                        </div>
                        <div className={Styles.DateNotifProduk}>
                            <label>20 April, 14.00</label>
                        </div>
                    </div>
                </div>
                <div className={Styles.RowNotif}>
                    <div className={Styles.ColNotif}>
                        <img src="/Assets/jam.png" />
                        <div className={Styles.DetailNtofiProduk}>
                            <h4>Penawar Produk</h4>
                            <label>Jam Tangan Casio</label>
                            <label>Harga : Rp 250.000</label>
                            <label>Ditawar : Rp 200.000</label>
                        </div>
                        <div className={Styles.DateNotifProduk}>
                            <label>20 April, 14.00</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
