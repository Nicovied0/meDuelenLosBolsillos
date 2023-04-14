import React from "react";

export default function Dolares({ data }) {
  return (
    <div>
      <div>
        <h2>dolar oficial</h2>
        <img></img>
        <h3>compra</h3>
        <h4>$300</h4>
        <h3>Venta</h3>
        <h4>$300</h4>
      </div>
      <h1>Lista de artículos</h1>
      {/* {data.map(({ id, title, body }) => (
        <div key={id}>
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      ))} */}
      {console.log(data)}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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