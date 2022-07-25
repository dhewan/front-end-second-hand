import { useState } from "react";
import Styles from "./penawar.module.css";
import Modals from "./modals";

export default function Penawar() {

    const [OpenModal, SetOpenModal] = useState(false);

    return (
        <div className={Styles.ContainerPenawar}>
            <div className={Styles.JudulPenawrProduct}>
                <h1>INFO PENAWAR PRODUCT</h1>
            </div>

        <div className={Styles.BodyPenawar}>
            <div className={Styles.InfoUser}>
                <div className={Styles.RowUser}>
                    <img className={Styles.ImgUser} src="/logo.jpg" />
                    <div className={Styles.textUser}>
                        <label>Nama Pembeli</label>
                        <p>Kota</p>
                    </div>
                    <img className={Styles.ImgAdd} src="/Assets/add.svg" />
                </div>
                <div className={Styles.RowUser}>
                    <img className={Styles.ImgUser} src="/logo.jpg" />
                    <div className={Styles.textUser}>
                        <label>Nama Pembeli</label>
                        <p>Kota</p>
                    </div>
                    <img className={Styles.ImgAdd} src="/Assets/add.svg" />
                </div>
                <div className={Styles.RowUser}>
                    <img className={Styles.ImgUser} src="/logo.jpg" />
                    <div className={Styles.textUser}>
                        <label>Nama Pembeli</label>
                        <p>Kota</p>
                    </div>
                    <img className={Styles.ImgAdd} src="/Assets/add.svg" />
                </div>
                
            </div>

            <div className={Styles.InfoPenawar}>
                <div className={Styles.judulInfoProduk}>
                    <label>Daftar Product yang Ditawar</label>
                </div>
                <div className={Styles.RowPenawar}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.DetailProduk}>
                        <h4>Penawar Produk</h4>
                        <p>Produk : Jam Tangan Casio</p>
                        <p>Harga : Rp 250.000</p>
                        <p>Ditawar : Rp 200.000</p>
                    </div>
                    <div className={Styles.ActionButton}>
                        <label>20 April, 14.00</label>
                        <div className={Styles.BtnPenawar}>
                            <button className={Styles.BtnCancle}>Cancel</button>
                            <button id="BtnShowModal" onClick={() => { SetOpenModal(true);}} className={Styles.BtnAccept}>Accept</button>
                        </div>
                    </div>
                </div>
                <div className={Styles.RowPenawar}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.DetailProduk}>
                        <h4>Penawar Produk</h4>
                        <p>Produk : Jam Tangan Casio</p>
                        <p>Harga : Rp 250.000</p>
                        <p>Ditawar : Rp 200.000</p>
                    </div>
                    <div className={Styles.ActionButton}>
                        <label>20 April, 14.00</label>
                        <div className={Styles.BtnPenawar}>
                            <button className={Styles.BtnCancle}>Cancel</button>
                            <button id="BtnShowModal" onClick={() => { SetOpenModal(true);}} className={Styles.BtnAccept}>Accept</button>
                        </div>
                    </div>
                </div>
                <div className={Styles.RowPenawar}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.DetailProduk}>
                        <h4>Penawar Produk</h4>
                        <p>Produk : Jam Tangan Casio</p>
                        <p>Harga : Rp 250.000</p>
                        <p>Ditawar : Rp 200.000</p>
                    </div>
                    <div className={Styles.ActionButton}>
                        <label>20 April, 14.00</label>
                        <div className={Styles.BtnPenawar}>
                            <button className={Styles.BtnCancle}>Cancel</button>
                            <button id="BtnShowModal" onClick={() => { SetOpenModal(true);}} className={Styles.BtnAccept}>Accept</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div className={Styles.ModalsContainer}>
            {OpenModal && <Modals CloseModal={SetOpenModal} />}
        </div>
            
        </div>
    )
}
