import React from "react";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Cuanto sale?</title>
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <nav>
        <button>
          <Link href="/" legacyBehavior>
            <a>Inicio</a>
          </Link>
        </button>
        <button>
          <Link href="/about" legacyBehavior>
            <a>sobre mi</a>
          </Link>
        </button>
        <button>
          <Link href="/plataformas" legacyBehavior>
            <a>Plataformas</a>
          </Link>
        </button>
      </nav>
      <main>{children}</main>
      <div>footer</div>
    </div>
  );
};

export default Layout;
