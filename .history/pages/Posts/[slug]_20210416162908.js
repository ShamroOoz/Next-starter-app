import axios from "axios";
import { useRouter } from "next/router";

export default function Details({ post }) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      For each post details
      {slug}
      <div>{post?.body}</div>
      <div className="text-center" onClick={() => router.push("/")}>
        Go back to home
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
  const paths = data.map((posts) => {
    return {
      params: { slug: posts.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.slug;
  const res = await axios("https://jsonplaceholder.typicode.com/posts/" + id);
  return {
    props: { post: res.data },
  };
};

// export const getServerSideProp = async (context) => {
//   const id = context.params.slug;
//   console.log(id);
//   const res = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   return {
//     props: { post: res.data },
//   };
// };
