import { useRouter } from "next/router";

export default function Details() {
  const router = useRouter();
  const { slug } = router.query;
  return <div>For each post details {slug}</div>;
}
