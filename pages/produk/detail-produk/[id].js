
import { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

import { NavbarProfile } from '../../../components/Navbar/Navbar';
import Images from '../../../components/produkImg';
import Footer from '../../../components/Footer';
import style from '../../../styles/produkDetail.module.css';

import { useRouter } from 'next/router';
import axios from "axios"

const DetailProduct = () => {
    const [product, setProduct] = useState([])
    const [user, setUser] = useState([]);
    const [userImage, setUserImage] = useState([]);

    const [images, setImages] = useState([])
    const [popProductImage, setPopProductImage] = useState([])
    const router = useRouter()

    useEffect(() => {
        getProduct()
    }, [])


    const getProduct = async () => {
        try {
            const response = await axios.get(`https://fsw6-group4-staging.herokuapp.com/api/v1/products/info/${router.query.id}`)
            setProduct(response.data.data[0])
            setUser(response.data.data[0].users);
            setUserImage(response.data.data[0].users.profile_img);
            console.log('user produk ini : ', response.data.data[0].users)
            setImages(response.data.data[0].images)
            setPopProductImage(response.data.data[0].images[0].img)
        }

        catch(err) {
            console.log(err)
        }
    }

    const [displayClass, setDisplayClass] = useState(style.popupHide)

    const changeDisplay = () => {
        if(displayClass == style.popupHide) {
            setDisplayClass(style.popupDisplay)
        }

        else {
            setDisplayClass(style.popupHide)
        }
    }

    return(
        <>
        <NavbarProfile></NavbarProfile>

        <div className={style.productInfo}>
            <div className={style.left}>
                <div className={style.top}>
                    <Carousel className={style.carousel}>
                        { images.map((item) => <Images props={item}></Images>) }
                    </Carousel>
                </div>
                
                <div className={style.bottom}>
                    <h1>Deskripsi :</h1>
                    <p>{product.description}</p>
                   </div>
            </div>

            <div className={style.right}>
                <div className={style.top}>
                    <h2>{product.product_name}</h2>
                    <p>Category : {product.category}</p>
                    <h3>Rp {product.price}</h3>
                    <button className={style.btnPurple} onClick={changeDisplay}>Saya tertarik dan ingin nego</button>
                </div>
                
                <div className={style.bottom}>
                    <img src={userImage} alt='profileImage'/>
                    
                    <div className={style.sellerInfo}>
                        <h1>Nama : </h1>
                        <h4>Kota : </h4>
                    </div>
                </div>
            </div>

            <div className={displayClass}>
                <div className={style.popupContainer}>
                    <div className={style.popup}>
                        <p onClick={changeDisplay}>X</p>

                        <h1>Masukkan Harga Tawarmu</h1>
                        <h2>Harga tawaranmu akan diketahui penjual. Jika penjual cocok, kamu akan segera dihubungi penjual.</h2>

                        <div className={style.info}>
                            <img src={popProductImage} alt='produkImage'/>
                            
                            <div>
                                <h1>{product.product_name}</h1>
                                <h3>Rp {product.price}</h3>
                            </div>
                        </div>

                        <h3>Harga Tawar</h3>
                        <form action='/' method='POST'>
                            <input type='number' placeholder='Rp 0,00' required/>
                        </form>
                        <button type='button' className={style.btnPurple}>Kirim</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer ></Footer>
        </>
    )
}

export default DetailProduct;