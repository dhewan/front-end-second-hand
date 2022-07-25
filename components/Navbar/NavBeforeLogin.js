

import styles from "../../styles/NavBeforeLogin.module.css";

import {
  Button,
  Container,
  Navbar,
  NavbarBrand,
} from "react-bootstrap";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FiLogIn } from "react-icons/fi";

import Toast from "react-bootstrap/Toast";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const user =
  typeof window !== "undefined" ? window.localStorage.getItem("id") : {};

export const NavBeforeLogin = () => {
  const router = useRouter();
  const [users, setUsers] = useState({});

  useEffect(() => {
    setUsers(user);
    console.log('user:', user);
  }, [user]);

  const logout = async () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("id");
    router.push("/login");
  };

  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(!show);
  return (
    <>
      <Navbar className={styles.header} expand="lg">
        <Container className={styles.container}>
          <div className={styles.box1}>
            <Navbar.Brand
              href="/"
              className={styles.brand}
            ></Navbar.Brand>
          </div>

          {users > 0 ? (
            <Navbar>
              <ButtonGroup aria-label="Basic example" className="">
                <Button variant="outline-light" href="#">
                  <img src="../images/fi_list.png"></img>
                </Button>
                <div>
                  <Button variant="outline-light" onClick={toggleShow}>
                    <img src="../images/fi_bell.png"></img>
                  </Button>
                  <div className="ToastContainer">
                    <Toast
                      className="Toast"
                      onClose={() => setShow(false)}
                      show={show}
                    >
                      <Toast.Body>Jam tangan</Toast.Body>
                    </Toast>
                  </div>
                </div>
                <Button variant="outline-light" href="#">
                  <img src="../images/fi_user.png"></img>
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
          ) : (
            <div>
              <Button href="/login" className={styles.btn}>
              <FiLogIn className={styles.filogin} />
                <p className={styles.txt}>Masuk</p>
              </Button>
            </div>
          )}
        </Container>
      </Navbar>
    </>
  );
};
