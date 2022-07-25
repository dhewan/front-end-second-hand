import Head from "next/head"
import Image from "next/image"
import styles from "./halaman.module.css"
import axios from "axios"
import { useRouter } from 'next/router'

export default function Product(){
    const {query} = useRouter()
    const id = query.id
    //https://fsw6-group4-staging.herokuapp.com/halamanproduk?id=1 link
    axios.get(`https://fsw6-group4-staging.herokuapp.com/api/v1/products/${id}`)
    .then((dataP)=>{
        console.log(dataP);
    const productName = dataP.data.data.product_name
    const price = dataP.data.data.price
    const description = dataP.data.data.description
    const address = dataP.data.data.user.address
    const username = dataP.data.data.user.username
    const category = dataP.data.data.category

    document.getElementById("productName").innerHTML = productName;
    document.getElementById("address").innerHTML = address;
    document.getElementById("price").innerHTML = price;
    document.getElementById("description").innerHTML = description;
    document.getElementById("username").innerHTML = username;
    document.getElementById("category").innerHTML = category;
    })



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
                            <p className={styles.detaildeskripsi} id="description"></p>
                        </div>
                </div>
            </div>
            <div className={styles.row2}>
                    <div className={styles.detail}>
                        <div className={styles.detailproduct}>
                            <p className={styles.judulproduct} id="productName" ></p>
                            <p className={styles.kategoriproduct} id="category"></p>
                            <p className={styles.hargaproduct}>Rp. <span id="price"></span> </p>
                        </div>
                        <button className={styles.btn}>Nego barang</button>
                    </div>
                    <div className={styles.seller}>
                        <div className={styles.gambarseller}>
                            <Image src="/figma.jpg" width={70} height={50} alt='Profil Penjual'></Image>
                        </div>
                        <div className={styles.detailseller}>
                            <p className={styles.namaseller} id="username"></p>
                            <p className={styles.kotaseller} id="address"></p>
                        </div>
                    </div>
                    <div className={styles.productlain}>
                        <p className={styles.judulkonten}>Product Sejenis</p>
                        <div className={styles.konten}>
                            <div className={styles.product1}>
                                <Image src='/Jam.jpeg' width={100} height={50} alt=''></Image>
                                <p className={styles.judulproductlain}>Jam Tangan Casio</p>
                                <p className={styles.kategoriproductlain}>Aksesoris</p>
                                <p className={styles.hargaproductlain}>Rp. 250.000</p>
                            </div>
                            <div className={styles.product2}>
                                <Image src='/Jam.jpeg' width={100} height={50} alt=''></Image>
                                <p className={styles.judulproductlain}>Jam Tangan Casio</p>
                                <p className={styles.kategoriproductlain}>Aksesoris</p>
                                <p className={styles.hargaproductlain}>Rp. 250.000</p>
                            </div>
                        </div>
                    </div>
            </div>


        </div>
    )
}