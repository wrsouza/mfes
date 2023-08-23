import Navbar from "@/components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
