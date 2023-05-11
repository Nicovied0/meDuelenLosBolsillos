import { useState, useEffect } from "react";
import Image from "next/image";

const Monedas = ({ criptos }) => {
  const [icons, setIcons] = useState({});

  // Función para obtener los íconos de cada criptomoneda desde la API de cryptoicons.org
  // const fetchIcons = async () => {
  //   const newIcons = {};
  //   for (const cripto of criptos) {
  //     try {
  //       const response = await fetch(
  //         `https://cryptoicons.org/api/icon/${cripto.symbol.toLowerCase()}/200`,
  //         {
  //           headers: {
  //             Accept: "application/json",
  //           },
  //         }
  //       );
  //       const data = await response.json();
  //       newIcons[cripto.symbol] = data;
  //     } catch (error) {
  //       console.error(`Error al obtener el ícono de ${cripto.name}: ${error}`);
  //     }
  //   }
  //   setIcons(newIcons);
  // };

  // useEffect(() => {
  //   fetchIcons();
  // }, []);

  return (
    <div>
      {criptos.map((cripto) => {
        
        // const symbol = cripto.symbol.toUpperCase();
        // const icon = icons[symbol];
      //  console.log(`https://cryptoicons.org/api/icon/${cripto.symbol.toLowerCase()}/200`)
        return (
          <div key={cripto.id}>
            <h2>{cripto.name}</h2>
            <p>Precio: {cripto.quote.USD.price}</p>
            {cripto.symbol ? (
              <Image
                // src={icon.icon}
                src={`https://cryptologos.cc/logos/${cripto.name.toLowerCase()}-${cripto.symbol.toLowerCase()}-logo.png`}
                alt={`${cripto.symbol}`}
                width="32"
                height="32"
              />
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Monedas;
