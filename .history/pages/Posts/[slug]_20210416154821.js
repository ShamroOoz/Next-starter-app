import { useRouter } from "next/router";

export default function Details({ post }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(post);
  return (
    <div>
      For each post details
      {slug}
      <div>{post?.body}</div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const { data } = await fetch("https://jsonplaceholder.typicode.com/posts");

  // map data to an array of path objects with params (id)
  const paths = data.map((posts) => {
    return {
      params: { id: posts.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.slug;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);

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
