import { useRouter } from "next/router";

export default function Details() {
  const router = useRouter();
  console.log(router);
  const { pid } = router.query;
  return <div>For each post details {pid}</div>;
}
