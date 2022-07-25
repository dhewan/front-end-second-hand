import Head from "next/head"
import Image from "next/image"
import styles from "./wishlist.module.css"

export default function Wishlist(){
    return(
        <div className={styles.container}>
            <Head>
                <title>SeconHand. | Wishlist</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={styles.konten}>
                <div className={styles.headerkonten}>
                    <Image src='/charity.png' width={150} height={150} alt=''></Image>
                    <p className={styles.judulheader}>Wishlist</p>
                </div>

                <div className={styles.datakonten}>
                    <div className={styles.judulkonten}>
                        <p className={styles.judulkontenproduk}>Produk</p>
                        <p className={styles.judulkontenharga}>Harga</p>
                        <p className={styles.judulkontenstatus}>Status</p>
                    </div>

                    <div className={styles.listkonten}>
                        <div className={styles.product1}>
                            <div className={styles.gambarnama}>
                                <Image className={styles.gambarproduct} src='/Jam.jpeg' width={50} height={50} alt=''></Image>
                                <p className={styles.namaproduct}>Jam Tangan Casino</p>
                            </div>
                                <p className={styles.hargaproduct}>Rp. 250.000</p>
                                <p className={styles.statusproduct}>Menunggu Respon Penjual</p>
                        </div>
                        <div className={styles.product2}>
                            <div className={styles.gambarnama}>
                                <Image className={styles.gambarproduct} src='/Jam.jpeg' width={50} height={50} alt=''></Image>
                                <p className={styles.namaproduct}>Jam Tangan Casino</p>
                            </div>
                                <p className={styles.hargaproduct}>Rp. 250.000</p>
                                <p className={styles.statusproduct}>Menunggu Respon Penjual</p>
                        </div>
                        <div className={styles.product3}>
                            <div className={styles.gambarnama}>
                                <Image className={styles.gambarproduct} src='/Jam.jpeg' width={50} height={50} alt=''></Image>
                                <p className={styles.namaproduct}>Jam Tangan Casino</p>
                            </div>
                                <p className={styles.hargaproduct}>Rp. 250.000</p>
                                <p className={styles.statusproduct}>Menunggu Respon Penjual</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}