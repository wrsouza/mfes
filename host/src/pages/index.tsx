import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("home/pages/index"), {
  ssr: false,
});
export default HomePage;
