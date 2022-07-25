
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Navbar from "react-bootstrap/Navbar";
import Toast from "react-bootstrap/Toast";

import styles from "../../styles/NavBeforeLogin.module.css";

export function NavbarDefault() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Button variant="outline-light" href="/" className="me-5">
          <img src="../images/navbar.png"></img>
        </Button>
      </Container>
    </Navbar>
  );
}

export function NavbarInfoProfil() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Button variant="outline-light" href="/" className="me-5">
          <img src="../images/navbar.png"></img>
        </Button>
        <Container>
          <h5 className="text-center">Lengkapi Info Akun</h5>
        </Container>
      </Container>
    </Navbar>
  );
}

export function NavbarInfoPenawar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Button variant="outline-light" href="/" className="me-5">
          <img src="../images/navbar.png"></img>
        </Button>
        <Container>
          <h5 className="text-center">Info Penawar</h5>
        </Container>
      </Container>
    </Navbar>
  );
}


export function NavbarProfile() {
  const router = useRouter();

  const logout = async () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("id");
    router.push("/login");
  };

  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(!show);
  return (
    <Navbar className="box-shadow " bg="light" expand="lg">
      <Container>
        <Navbar>
          <Button variant="outline-light" href="/" className="me-5">
            <img src="../../images/navbar.png"></img>
          </Button>
          <div className="search-box">
            <input
              id="search"
              type="text"
              name="search"
              placeholder="Cari di sini ..."
              className="background-#EEEEEE"
            />
            <button className="search-button">
              <img src="../../images/fi_search.png"></img>
            </button>
          </div>
        </Navbar>

        <Navbar>
          <ButtonGroup aria-label="Basic example" className="">
            <Button variant="outline-light" href="#">
              <img src="../../images/fi_list.png"></img>
            </Button>

            <div>
              <Button variant="outline-light" onClick={toggleShow}>
                <img src="../../images/fi_bell.png"></img>
              </Button>
              <div className="ToastContainer">
                <Toast
                  className="Toast"
                  onClose={() => setShow(false)}
                  show={show}
                >
                  <Toast.Body></Toast.Body>
                </Toast>
              </div>
            </div>

            <Button variant="outline-light" href="#">
              <img src="../../images/fi_user.png"></img>
            </Button>   
          </ButtonGroup>

          <Button className={styles.btn} onClick={logout}>
            <p className={styles.txt}>Logout</p>
            <img
              src="/images/fi_log-in.png"
              alt="icon"
              width="23px"
              height="23px"
            />
          </Button>
          
        </Navbar>
      </Container>
    </Navbar>
  );
}