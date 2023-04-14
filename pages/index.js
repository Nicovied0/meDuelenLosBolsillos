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
      <h1>Precios</h1>
      <div className={styles.divDolares}>
        {data.map(({ nombre, venta, compra, fechaActualizacion }) => (
          <div key={nombre} className={styles.divCaja}>
            <div>
            {/* nombre === "Contado con liquidación" ? <h3>DOLAR Contado con Liqui :<h3>DOLAR {nombre}</h3> */}
              <h3>DOLAR {nombre}</h3>
              <p>COMPRA ${compra}</p>
              <hr></hr>
              <p>VENTA ${venta}</p>
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
