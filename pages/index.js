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
      <div className={styles.divtxt}>
        <h1 className={styles.h1Text}>Cotizaciones actuales del dólar HOY</h1>
        <p className={styles.ptxt}>
          Las cotizaciones se actualizarán automáticamente cada 5 minutos.
        </p>
      </div>
      <div className={styles.divDolares}>
        {data.map(({ nombre, venta, compra }) => (
          <div key={nombre} className={styles.divCaja}>
            <div className={styles.divCaja2}>
              <h2 className={styles.h2Dolar}>DOLAR {nombre}</h2>
              <div className={styles.divCaja3}>
                <h3 className={styles.h3dolar}>COMPRA ${compra}</h3>
                <hr className={styles.hr}></hr>
                <h3 className={styles.h3dolar}>VENTA ${venta}</h3>
              </div>
            </div>
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

function updateDolar() {
  getStaticProps;
}

setTimeout(() => updateDolar, 300000);
