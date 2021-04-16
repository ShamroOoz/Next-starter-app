import axios from "axios";
import { useRouter } from "next/router";

export default function Details({ data }) {
  const router = useRouter();
  return (
    <div className="py-3">
      <div className="text-center">{data?.body}</div>
      <div className="flex justify-center">
        <button
          className="cursor-pointer p-1 bg-gray-900 text-white rounded block"
          onClick={() => router.push("/posts")}
        >
          Go back to home
        </button>
      </div>
    </div>
  );
}

// export const getStaticPaths = async () => {
//   const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
//   const paths = data.map((posts) => {
//     return {
//       params: { slug: posts.id.toString() },
//     };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// };
// export const getStaticProps = async (context) => {
//   const id = context.params.slug;
//   const res = await axios("https://jsonplaceholder.typicode.com/posts/" + id);
//   return {
//     props: { data: res.data },
//   };
// };

export const getServerSideProp = async (context) => {
  const id = context.params.slug;
  const res = await axios(
    "https://jsonplaceholder.typicode.com/posts/" + id"
  );
  return {
    props: { data: res.data },
  };
};
