import Monedas from "@/Components/Monedas";


export default function Criptos({ criptos }) {
  return (
    <div>
      <h1>Criptomonedas</h1>
      <Monedas criptos={criptos}></Monedas>
    </div>
  );
}

export async function getServerSideProps() {
  const API_KEY = "44084462-10e7-4c30-9771-c8bf23d82d54";
  const response = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY}`
  );
  const data = await response.json();
  const criptos = data.data;
  return {
    props: { criptos },
  };
}
