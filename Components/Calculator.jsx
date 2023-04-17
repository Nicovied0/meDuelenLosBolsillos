import React from "react";
import { useState } from "react";

const Calculator = (props) => {
  const [input, setInput] = useState({
    numero: "",
  });
  console.log(input.numero);


  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  let calculo = input.numero * props.data[0].venta;
  let calculoImpuestos = calculo * 1.75;
  return (
    <div>
      <h2> Ingresa un monto para calcular los impuestos</h2>
      <div>
        <h2>Cotización dólar oficial</h2>
        <h3>${props.data[0].venta}</h3>
        {/* dolar oficial */}
      </div>
      <div>
        <input
          type="number"
          name="numero"
          placeholder="10"
          value={input.numero}
          onChange={handleChange}
          defaultValue={1}
        />
      </div>
      <div>
        {/* <h3>valor ${input.numero}</h3> */}
        <div>
          <h2>Sin impuestos</h2>
          <h3>${calculo}</h3>
        </div>
        <h2>+ Imp. PAIS (30%)</h2>
        <h2>+ Imp. ganancias (45%)</h2>
      </div>
      <div>
        <h2>Total c/ imp.</h2>
        <h2>${calculoImpuestos}</h2>
      </div>
    </div>
  );
};

export default Calculator;

// export async function getStaticProps() {
//   try {
//     const res = await fetch(
//       "https://dolar-api-argentina.vercel.app/v1/dolares"
//     );
//     const data = await res.json();
//     // console.log(data[0].venta);
//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }
//
