import axios from "axios";
import Link from "next/link";
import postslist from "./postslist";

export default function Posts({ posts }) {
  return (
    <>
      <div className="flex justify-center text-xl font-bold mt-2 ">
        All Posts
      </div>
      {posts.map((post) => (
        <Link href={`/posts/${encodeURIComponent(post.id)}`} key={post.id}>
          <a>
            <postslist data={post} />
          </a>
        </Link>
      ))}
    </>
  );
}

export const getStaticProps = async () => {
  const res = await axios("https://jsonplaceholder.typicode.com/posts");
  return {
    props: { posts: res.data },
  };
};
