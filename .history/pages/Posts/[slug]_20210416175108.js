import axios from "axios";
import { useRouter } from "next/router";

export default function Details({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <div>{data?.body}</div>
      <button
        className="cursor-pointer p-1 bg-gray-900 text-white rounded-md"
        onClick={() => router.push("/posts")}
      >
        Go back to home
      </button>
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
    props: { data: res.data },
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
