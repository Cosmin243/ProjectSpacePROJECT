import "@/styles/globals.css";
import { Bellefair } from "@next/font/google";
import { Main } from "next/document";
import Layout from "@/Components/Layout";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main className={bellefair.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
