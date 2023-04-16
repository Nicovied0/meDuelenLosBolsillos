import Image from "next/image";
import Layout from "@/Component/Layout";
// import Dolares from "@/Component/Dolares";
import styles from "../styles/index.module.css";

export default function Home({ data }) {
  return (
    <Layout>
      <div>
        <Image src="/img/1.jpg" height={600} width={600} alt="imgHome" />
        {/* <div><Dolares></Dolares></div> */}
      </div>
      <h1>Cotizaciones actuales del dólar HOY</h1>
      <div className={styles.divDolares}>
        {data.map(({ nombre, venta, compra, fechaActualizacion }) => (
          <div key={nombre} className={styles.divCaja}>
            <div>
              {/* nombre === "Contado con liquidación" ? <h3>DOLAR Contado con Liqui :<h3>DOLAR {nombre}</h3> */}
              <h2>DOLAR {nombre}</h2>
              <hr></hr>
              <div>
                <h3>COMPRA ${compra}</h3>
                <hr></hr>
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
