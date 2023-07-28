import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Feed from "@/components/Feed";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Instagram</title>
        <link
          rel="icon"
          href="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png"
        />
      </Head>

      <Header />
      <Feed />
    </div>

    // Modal
  );
}
