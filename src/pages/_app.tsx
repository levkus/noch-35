import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Отбросы ночи</title>
        <meta
          name="description"
          content="Привет! Это моё приглашение на ДР. Внутри вся информация. Огромная просьба не показывать детям. Заранее извиняюсь, не судите строго xD"
        />

        <meta property="og:title" content="Отбросы ночи" />
        <meta
          property="og:description"
          content="Привет! Это моё приглашение на ДР. Внутри вся информация. Огромная просьба не показывать детям. Заранее извиняюсь, не судите строго xD"
        />
        <meta
          property="og:image"
          content="https://misfits-party.starpact.io/og.png"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Toaster position="bottom-center" />
      <Component {...pageProps} />
    </>
  );
}
