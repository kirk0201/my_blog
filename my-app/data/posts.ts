import { Post } from "@/types/post";

export const posts:Post[] = [
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