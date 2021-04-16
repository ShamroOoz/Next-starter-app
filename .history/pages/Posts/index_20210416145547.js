import axios from "axios";
import postsList from "./postsList";


export default function Posts({ posts }) {
  return (
    {
      posts.map(post => <postsList key={post.id} data={post} />)
    }
  );
}

export const getStaticProps = async () => {
  const res = await axios("https://jsonplaceholder.typicode.com/posts");
  return {
    props: { posts: res.data },
  };
};
