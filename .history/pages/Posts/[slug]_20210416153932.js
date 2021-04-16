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

export const getServerSideProp = async (context) => {
  const id = context.params;
  console.log(id);
  const res = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return {
    props: { post: res.data },
  };
};
