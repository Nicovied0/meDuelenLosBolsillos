import Link from "next/link";
import { Inter } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>soy home</h2>

        <button>
          <Link href="/" legacyBehavior>
            <a>home</a>
          </Link>
        </button>
        <button>
          <Link href="/about">about</Link>
        </button>
        <Image
          src="/img/1.jpg"
          height={400}
          width={400}
          alt="mi imagen de perfil"
        />
      </div>
    </main>
  );
}
