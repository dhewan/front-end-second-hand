import Head from "next/head";
import styles from "./halamanprodukseller.module.css"
import Image from "next/image";

export default function Halamanseller(){
    return(
        <div className={styles.container}>
            <Head>
                <title>SeconHand. | Halaman Produk</title>
                <link rel="icon" href="/favicon.ico"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            </Head>

            <div className={styles.row1}>
                <div className={styles.gambar}>
                        <div id="demo" class="carousel slide" data-bs-ride="carousel">

                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                            </div>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <Image src="/Jam.jpeg" width={860} height={500} alt='a'></Image>
                                </div>
                                <div class="carousel-item">
                                    <Image src="/Jam.jpeg" width={860} height={500} alt='a'></Image>
                                </div>
                                <div class="carousel-item">
                                    <Image src="/Jam.jpeg" width={860} height={500} alt='a'></Image>
                                </div>
                            </div>
                            <div className={styles.buttoncarousel}>
                                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>    
                        </div>
                        
                         <div className={styles.deskripsi}>
                            <p className={styles.juduldeskripsi}>DESKRIPSI</p>
                            <p className={styles.detaildeskripsi}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                </div>
            </div>
            <div className={styles.row2}>
                    <div className={styles.detail}>
                        <div className={styles.detailproduct}>
                            <p className={styles.judulproduct}>Jam Tangan Casio</p>
                            <p className={styles.kategoriproduct}>Aksesoris</p>
                            <p className={styles.hargaproduct}>Rp. 250.000</p>
                        </div>
                        <button className={styles.btn}>Edit</button>
                    </div>
                    <div className={styles.seller}>
                        <div className={styles.gambarseller}>
                            <Image src="/figma.jpg" width={70} height={50} alt='Profil Penjual'></Image>
                        </div>
                        <div className={styles.detailseller}>
                            <p className={styles.namaseller}>Nama Penjual</p>
                            <p className={styles.kotaseller}>Kota</p>
                        </div>
                    </div>
            </div>


        </div>
    )
}