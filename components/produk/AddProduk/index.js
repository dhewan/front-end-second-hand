import Head from "next/head";
import styles from "./tambahproduk.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Tambahproduk(){
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) =>{
      axios.post("https://fsw6-group4-staging.herokuapp.com/api/v1/products",{
        product_name: data.product_name,
        price: data.price,
        category: data.category,
        product_img1: data.product_img1,
        description : data.description
      })
      console.log(data);
    }
    return(
        <div className={styles.container}>
            <Head>
                <title>SecondHand. | Tambah Produk</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            </Head>
                <div className={styles.konten}>
                    <form action="/previewproduk" method="POST" onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.namaproduct}>
                            <label for='namaproduk' className={styles.labelproduct}>Nama Produk</label>
                            <input type='text' className={styles.inputkonten} name="Nama" id="namaproduk" placeholder="Nama Produk" {...register("product_name")}required></input>
                        </div>

                        <div className={styles.hargaproduct}>
                            <label for='hargaproduk' className={styles.labelproduct}>Harga Produk</label>
                            <input type='text' className={styles.inputkonten} name="Harga" id="hargaproduk" placeholder="Rp. 0.00" {...register("price")}required></input>
                        </div>

                        <div className={styles.kategoriproduct}>
                                <label for="kategori">Kategori</label>
                                    <select name="kategori" id="kategori" className={styles.inputkonten}   {...register("category")} >
                                        <option value=""></option>
                                        <option value="Hobi">Hobi</option>
                                        <option value="Kendaraan">Kendaraan</option>
                                        <option value="Baju">Baju</option>
                                        <option value="Elektronik">Elektronik</option>
                                    </select>
                        </div>

                        <div className={styles.deskripsiproduct}>
                            <label for='Deskripsiproduk' className={styles.labelproduct}>Deskripsi Produk</label>
                            <input type='text' className={styles.inputkonten} name="Deskripsi" id="Deskripsiproduk" placeholder="Contoh : ..." {...register("description")}required></input>
                        </div>

                        <div className={styles.fotoproduct}>
                                <label for='fotoproduk' className={styles.labelproductgambar}>Foto Produk</label>
                                <input type='file' className={styles.inputkontenfile} name="foto" id="fotoproduk" {...register("product_img1")}required></input>
                        </div>

                        <div className={styles.buttonproduct}>
                            <Link href="/produk/produkpreview">
                                <input type="submit" className={styles.button} name="submit" value="Preview"></input>
                            </Link>
                            <input type="submit" className={styles.button1} name="submit" value="Terbitkan"></input>
                        </div>
                    </form>
                </div>
        </div>
    );
}