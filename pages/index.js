import Image from "next/image";
import Layout from "@/Components/Layout";
import styles from "../styles/index.module.css";
import Dolares from "@/Components/Dolares";
// import { getStaticProps } from "../pages/function";

export default function Home({ data }) {
  // let data = getStaticProps() ;
  // console.log(data)
  return (
    <Layout>
      <div>
        <Image
          src="/img/1.jpg"
          height={500}
          width={500}
          alt="imgHome"
          className={styles.Imagen}
        />
      </div>
      <div className={styles.divtxt}>
        <h1 className={styles.h1Text}>Cotizaciones actuales del dólar HOY</h1>
        <p className={styles.ptxt}>
          Las cotizaciones se actualizarán automáticamente cada 5 minutos.
        </p>
      </div>

      <Dolares data={data} />
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    let res = await fetch("https://dolar-api-argentina.vercel.app/v1/dolares");
    let data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}




