import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
const BlogPage = dynamic(() => import("blog/pages/index"), {
  ssr: false,
});

export default function Blog() {
  return <BlogPage />;
}