import Link from "next/link";
import Layout from "../components/Layout";
import { getAllMoviesForHome } from "../utils/sanity/api";

const IndexPage = (props: any) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <div>{JSON.stringify(props.allMovies, null, 2)}</div>
  </Layout>
);

export async function getStaticProps({ preview = false }) {
  const allMovies = await getAllMoviesForHome(preview);
  return {
    props: { allMovies, preview },
  };
}

export default IndexPage;
