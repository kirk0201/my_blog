import Image from "next/image";
import { posts } from "@/data/posts";

export default function Home() {
  console.log("posts : ", posts);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      div
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        start
      </main>
    </div>
  );
}
