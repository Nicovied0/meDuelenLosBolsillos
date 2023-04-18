import React from "react";
import Layout from "@/Components/Layout";
import Calculadoras from "@/Components/Calculadoras";

const index = ({ data }) => {
  let info = data;

  return (
    <Layout>
      <Calculadoras info={info} />
    </Layout>
  );
};

export default index;

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://dolar-api-argentina.vercel.app/v1/dolares"
    );
    const data = await res.json();
    // console.log(data[0].venta);
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
