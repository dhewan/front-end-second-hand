import Script from 'next/script';
import { useState } from "react";
import Styles from "./produk.module.css";
import Link from "next/link";

import AllProduk from "./AllProduk";
import Intersted from "./ProdukDiminati";
import Sell from "./SellProduk";

export default function Produk() {

    const [Show, SetShow] = useState("produk")

    return (
        <div className={Styles.halamanProduk}>

                <div className={Styles.JudulProduk}>
                    <label>Daftar Jual Saya</label>
                    <label>Hi Dhewan</label>
                </div>
            <div className={Styles.BodyProduk}>
                
                <div className={Styles.Kategori}>
                    <label>Kategori</label>

                    <div className={Styles.TambahProduct}>
                        <Link href="/produk/tambahproduk">
                        <button>
                            <img className={Styles.Add} src="/Assets/add.png" />
                            <span>Tambah Produk</span>
                            <img className={Styles.arrowProduk} src="/Assets/add.svg" />
                        </button>
                        </Link>
                    </div>
                    <div className={Styles.AllProduk}>
                        <button onClick={() => SetShow("produk")}>
                            <img className={Styles.box} src="/Assets/box.png" />
                            <span>Semua Produk</span>
                            <img className={Styles.arrowProduk} src="/Assets/produk.svg" />
                        </button>
                    </div>
                    <div className={Styles.Diminati}>
                        <button onClick={() => SetShow("favorit")}>
                            <img className={Styles.hati} src="/Assets/heart.png" />
                            <span>Diminati</span>
                            <img className={Styles.arrowProduk} src="/Assets/heart.svg" />
                        </button>
                    </div>
                    <div className={Styles.Terjual}>
                        <button onClick={() => SetShow("terjual")}>
                            <img className={Styles.dollar} src="/Assets/dollar.png" />
                            <span>Terjual</span>
                            <img className={Styles.arrowProduk} src="/Assets/dollar.svg" />
                        </button>
                    </div>
                <Script src='script/product.js'/>
                </div>

                    <div id="cardproduk" className={Styles.cardproduk}>
                        {
                            Show=="produk"?<AllProduk />:Show=="favorit"?<Intersted />:<Sell />
                        }
                    </div>
            </div>


        </div>
    );
}

