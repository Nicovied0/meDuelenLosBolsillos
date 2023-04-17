import React from "react";

const Dolares = ({ data }) => {
  return (
    <div>
      {data.map(({ nombre, venta, compra, fechaActualizacion }) => (
        <div key={nombre}>
          <h3>{nombre}</h3>
          <p>{compra}</p>
          <p>{venta}</p>
          <p>{fechaActualizacion}</p>
        </div>
      ))}
    </div>
  );
};
export default Dolares;

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
