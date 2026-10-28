import Image from "next/image";
import { Post } from "@/types/post";

let post:Post[] = [
  {
    title: "제목",
    slug: "unity-devlog-1",
    date: "2026-10-23",
    description: "설명",
    category: "devlog",
    tags: ["devlog"],
    isPublished: true,
    thumbnail: "썸네일",
    updatedAt: "2026-10-23"
  },
  {
    title: "제목2",
    slug: "daily-dailylog-1",
    date: "2026-10-23",
    description: "설명2",
    category: "daily",
    tags: ["daily"],
    isPublished: true,
    thumbnail: "썸네일2",
    updatedAt: "2026-10-23"
  },
  {
    title: "제목3",
    slug: "daily-dailylog-2",
    date: "2026-10-23",
    description: "설명3",
    category: "daily",
    tags: ["daily"],
    isPublished: true,
    thumbnail: "썸네일3",
    updatedAt: "2026-10-23"
  }
]

export default function Home() {
  console.log("post : ", post);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      div
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        start
      </main>
    </div>
  );
}
