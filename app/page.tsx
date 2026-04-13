import { redirect } from "next/navigation";

// Root of blog.guidancebusiness.com → redirect to /blog
export default function Home() {
  redirect("/blog");
}
