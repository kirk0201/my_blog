import { Post } from "@/types/post";
import { siteConfig } from "@/config/site";

export function sortByDateDesc(posts: Post[]): Post[] {
    return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getTotalPages(count:number, perPage = siteConfig.perPage){
    return Math.max(1, Math.ceil(count / perPage));
}
