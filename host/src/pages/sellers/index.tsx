import type { GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
const SellerListPage = dynamic(() => import("sellers/pages/index"), {
  ssr: true,
});

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const page = await import("sellers/pages/index");

  if (page.getServerSideProps) {
    return page.getServerSideProps(context);
  }

  return {
    props: {},
  };
}

export default SellerListPage;
