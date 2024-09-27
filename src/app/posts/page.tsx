import PostList from "@/components/post-list";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="text-center pt-7 px-5">
      <h1 className="text-4xl font-bold mb-5 md:text-5xl">All posts</h1>
      <Suspense fallback="...Loading">
        <PostList/>
      </Suspense>
    </main>
  )
}
