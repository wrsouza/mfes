import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("home/pages/index"), {
  ssr: false,
});

export default function Home() {
  return <HomePage />;
}