import type { GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
const SellerEditPage = dynamic(() => import("sellers/pages/[id]"), {
  ssr: false,
});

export default SellerEditPage;
