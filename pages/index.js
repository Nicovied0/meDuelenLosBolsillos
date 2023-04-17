import Image from "next/image";
import Layout from "@/Components/Layout";
import styles from "../styles/index.module.css";

export default function Home({ data }) {
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
      <h1 className={styles.h1Text}>Cotizaciones actuales del dólar HOY</h1>
      <div className={styles.divDolares}>
        {data.map(({ nombre, venta, compra, fechaActualizacion }) => (
          <div key={nombre} className={styles.divCaja}>
            <div className={styles.divCaja2}>
              {/* nombre === "Contado con liquidación" ? <h3>DOLAR Contado con Liqui :<h3>DOLAR {nombre}</h3> */}
              <h2>DOLAR {nombre}</h2>
              
              <div className={styles.divCaja3}>
                <h3>COMPRA ${compra}</h3>
                <hr className={styles.hr}></hr>
                <h3>VENTA ${venta}</h3>
              </div>
            </div>
            {/* <p>{fechaActualizacion}</p> */}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    // data = await getDate()
    const res = await fetch(
      "https://dolar-api-argentina.vercel.app/v1/dolares"
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
