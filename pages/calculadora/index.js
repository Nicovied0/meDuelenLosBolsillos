import React from "react";
import Layout from "@/Components/Layout";

import Calculator from "@/Components/Calculator";

const index = ({ data }) => {
  let info = data;

  return (
    <Layout>
      <Calculator data={info}></Calculator>
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
