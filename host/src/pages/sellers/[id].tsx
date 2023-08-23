import type { GetServerSidePropsContext } from "next";
import dynamic from "next/dynamic";
const SellerEditPage = dynamic(() => import("sellers/pages/[id]"), {
  ssr: true,
});

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const page = await import("sellers/pages/[id]");

  if (page.getServerSideProps) {
    return page.getServerSideProps(context);
  }

  return {
    props: {},
  };
}

export default SellerEditPage;
