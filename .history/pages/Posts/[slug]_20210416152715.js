import { useRouter } from "next/router";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  return <div>For each post details {id}</div>;
}
