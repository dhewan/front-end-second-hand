
import React from "react";
import { useEffect, useState } from "react"
import { Button, Container} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import axios from "axios"

import ProductCard from "./CardProduct";
import Styles from "../../styles/Product.module.css";
import StylesNavbar from "../../styles/NavBeforeLogin.module.css";

export default function ListProduct() {

  const [productList, setProductList] = useState([])

  useEffect(() => {
    getProduct()
    console.log("Produk: ", productList)
  }, [])
  
  const getProduct = async () => {
    try {
      const response = await axios.get(`https://fsw6-group4-staging.herokuapp.com/api/v1/listproduct`)
      setProductList(response.data.data)
      console.log('Get All ', productList)
    }

    catch(err) {
      console.log(err)
    }
  }

  const FilterCategory = async (e, category) => {
    try {
      e.preventDefault()
        const response = await axios.post(`https://fsw6-group4-staging.herokuapp.com/api/v1/products/filterByCategory`, {
          category
        })
        setProductList(response.data.data)
        console.log('Filter ', category, productList)
    }

    catch(err) {
      console.log(err)
    }
  }

  const SearchProduct = async (e, productName) => {
    try {
      e.preventDefault()
        const response = await axios.post(`https://fsw6-group4-staging.herokuapp.com/api/v1/filterByName`, {
          productName
        })
        setProductList(response.data.data)
    }

    catch(err) {
      console.log(err)
    }
  }

  return (
    <>
      <Container>
        <div id={StylesNavbar.homeSearch}>
          <form className={StylesNavbar.search} onSubmit={(event) => SearchProduct(event, document.getElementById('search').value)}>
            <input id="search" type="search" placeholder="Cari di sini ..." aria-label="Search" className={StylesNavbar.formsearch}/>
            <button type="search" className={StylesNavbar.btnsearch}><Search className={StylesNavbar.iconsearch}/></button>
          </form>
        </div>

        <h1 className={Styles.title}>Telusuri Kategori</h1>

        <div className={Styles.btnFilterContainer}>
            <a>
              <Button className={Styles.btnFilterCategory} type="search" onClick={() => getProduct()}>
                <Search className={Styles.icon} />
                <p className={Styles.text}>Semua</p>
              </Button>
            </a>
            <a>
              <Button className={Styles.btnFilterCategory} type="search" onClick={(event) => FilterCategory(event, "Kendaraan")}>
                <Search className={Styles.icon} />
                <p className={Styles.text}>Kendaraan</p>
              </Button>
            </a>
            <a>
              <Button className={Styles.btnFilterCategory} type="search" onClick={(event) => FilterCategory(event, "Hobi")}>
                <Search className={Styles.icon} />
                <p className={Styles.text}>Hobi</p>
              </Button>
            </a>
            <a>
              <Button className={Styles.btnFilterCategory} type="search" onClick={(event) => FilterCategory(event, "Baju")}>
                <Search className={Styles.icon} />
                <p className={Styles.text}>Baju</p>
              </Button>
            </a>
            <a>
              <Button className={Styles.btnFilterCategory} type="search" onClick={(event) => FilterCategory(event, "Aksesoris")}>
                <Search className={Styles.icon} />
                <p className={Styles.text}>Aksesoris</p>
              </Button>
            </a>
            <a>
              <Button className={Styles.btnFilterCategory} type="search" onClick={(event) => FilterCategory(event, "Camera")}>
                <Search className={Styles.icon} />
                <p className={Styles.text}>Camera</p>
              </Button>
            </a>
            <a>
              <Button className={Styles.btnFilterCategory} type="search" onClick={(event) => FilterCategory(event, "Elektronik")}>
                <Search className={Styles.icon} />
                <p className={Styles.text}>Elektronik</p>
              </Button>
            </a>
        </div>
        
        <div className={Styles.cardProduk}>
          { productList.map((item) => <ProductCard key={item.id} props={item}/>) }
        </div>
      </Container>
    </>
  );
};