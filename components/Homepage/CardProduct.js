
import React from "react";
import Link from "next/link";
import Style from "../../styles/Card_Produk.module.css";

export default function CardProduct(props) {
  console.log('id produk: ', props.props.id)
  return (
    <>
      <div id={props.props.id} className={Style.card}>
        <Link href={`https://fsw6-group4-staging.herokuapp.com/halamanproduk?id=${props.props.id}`}>
          <a>
            <img
              src={props.props.images[0].img}
              alt="Image Tidak Ditemukan"
              className={Style.imgProduk}
            />
            <p className={Style.nama}>{props.props.product_name}</p>
            <p className={Style.category}>{props.props.category}</p>
            <p className={Style.price}>Rp {props.props.price}</p>
          </a>
        </Link> 
      </div>
    </>
  );
}
