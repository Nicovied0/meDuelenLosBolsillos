import Layout from "../../Component/Layout";

export default function index({ data }) {
  return (
    <Layout
      title="Lista de post escritos por mi"
      description="descripcion de posts"
    >
      <h1>Lista de artículos</h1>
      {data.map(({ nombre, venta,compra, fechaActualizacion }) => (
        <div key={nombre}>
          <h3>{nombre}</h3>
          <p>{compra}</p>
          <p>{venta}</p>
          <p>{fechaActualizacion}</p>
        </div>
      ))}
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
