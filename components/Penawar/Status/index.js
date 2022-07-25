import Styles from "./status.module.css";

export default function StatusTransaksi({CloseModal}) {
    return (
        <div className={Styles.ModalStatus}>
            <div className={Styles.BodyStatus}>

                <div className={Styles.StatusClose}>
                    <button onClick={() => CloseModal(false)}>
                        <div className={Styles.ModalClose}></div>
                        <img src="/Assets/x.svg" />
                    </button>
                </div>

                <div className={Styles.InformasiStatus}>
                    <label>Perbarui status penjualan produkmu</label>
                </div>

                <div className={Styles.KontenStatus}>
                    <div className={Styles.StatusTerima}>
                        <input name="Active" type="radio" />
                        <div className={Styles.StatusBerhasil}>
                            <label>Berhasil terjual</label>
                            <p>Kamu telah sepakat menjual produk ini kepada pembeli</p>
                        </div>
                    </div>
                    <div className={Styles.StatusBatal}>
                        <input name="Active" type="radio" />
                        <div className={Styles.StatusGagal}>
                            <label>Batalkan transaksi</label>
                            <p>Kamu membatalkan transaksi produk ini dengan pembeli</p>
                        </div>
                    </div>
                </div>

                <div className={Styles.BtnStatusKirim}>
                    <button>Kirim</button>
                </div>

            </div>
        </div>
    )
}
