import axios from "axios";
import Link from "next/link";
import Postslist from "./Postslist";

export default function Posts({ data }) {
  return (
    <>
      <div className="flex justify-center text-xl font-bold mt-2 ">
        All Posts
      </div>
      {data.map((post) => (
        <Link href={`/posts/${encodeURIComponent(post.id)}`} key={post.id}>
          <a>
            <Postslist post={post} />
          </a>
        </Link>
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const res = await axios("https://jsonplaceholder.typicode.com/posts");
  return {
    props: { data: res.data },
  };
};
