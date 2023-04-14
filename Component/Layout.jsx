import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.div}>
      <Head>
        <title>Cuanto sale?</title>
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <nav className={styles.nav}>
        <div className={styles.div1}>

        <Image
          src="/img/logo.png"
          className={styles.imagen}
          alt="imgHome"
          width={30}
          height={30}
        ></Image>
        <h2>Cuanto sale?</h2>
        </div>
        <div className={styles.navDiv}>
          <button>
            <Link href="/" legacyBehavior>
              <a className={styles.a}>Inicio</a>
            </Link>
          </button>
          <button>
            <Link href="/about" legacyBehavior>
              <a className={styles.a}>sobre mi</a>
            </Link>
          </button>
          <button>
            <Link href="/plataformas" legacyBehavior>
              <a className={styles.a}>Plataformas</a>
            </Link>
          </button>
        </div>
      </nav>
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
