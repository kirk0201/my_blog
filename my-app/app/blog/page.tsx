import type { Metadata } from "next"
import DetailPage from "@/components/DetailPage";
import { posts } from "@/data/posts";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog",
    description: ""
}
export default function BlogPage(){
    // title: string;
    // readonly slug: string;
    // date: string;
    // description: string;
    // category: Category;
    // tags: string[];
    // isPublished: boolean;
    // thumbnail?: string;
    // updatedAt?: string;
    const publishedPosts = posts.filter((post) => post.isPublished);
    const document = posts.map((item, idx)=> {
        return(
            <div>
                
            </div>
        )
    })
    return (
        <section>
            <h1 className="mb-6 text-2xl font-bold">글 목록</h1>
            {publishedPosts.length == 0 ? (
                    <p>아직 글이 없어요.</p>
                ) : (
                <ul className="space-y-4 bg-amber-600">
                    {publishedPosts.map((post) => (
                        <li key={post.slug}>
                            <Link href={`/posts/${post.slug}`} className="text-lg font-semibold hover:underline">
                                {post.title}
                            </Link>
                            <p className="text-sm text-gray-500">
                                {post.date} · {post.description}
                            </p>
                        </li>
                    ))}
                </ul>
                )
            }
        </section>
    )
}