
import React from "react";

import {
  Container,
  Navbar,
  NavbarBrand
} from "react-bootstrap";

import { 
 Bell,
 ListUl, 
 Person, 
 Search 
} from "react-bootstrap-icons";

import Styles from "../../styles/NavLogin.module.css";
import Link from "next/link";

export const NavLogin = () => {
  return (
    <>
      <Navbar className={Styles.header} expand="lg">
        <Container className={Styles.container}>
          <div className={Styles.box1}>
            <NavbarBrand>
              <img
                href="/"
                className={Styles.brand}
              />
            </NavbarBrand>

          </div>

          <div>
            <Link href="/">
              <a>
                <ListUl className={Styles.btnIcon}/>
              </a>
            </Link>

            <Link href="/">
              <a>
                <Bell className={Styles.btnIcon}/>
              </a>
            </Link>

            <Link href="/">
              <a>
                <Person className={Styles.btnIcon}/>
              </a>
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};