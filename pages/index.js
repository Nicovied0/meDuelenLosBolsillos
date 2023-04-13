
import Image from "next/image";
import Layout from "@/Component/Layout";
import Dolares from "@/Component/Dolares";

export default function Home() {
  return (
    <Layout>
      <div>

        <Image
          src="/img/1.jpg"
          height={600}
          width={600}
          alt="imgHome"
        />
        <div>
          <Dolares></Dolares>
        </div>
      </div>
    </Layout>
  );
}
