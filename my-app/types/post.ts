export type Category = "devlog" | "daily";
export type Post = {
    title: string
    readonly slug: string
    date: string
    description: string
    category: Category
    tags: string[]
    isPublished: boolean
    thumbnail?: string
    updatedAt?: string
}
export type DevLogPost = Post & {
    category: "devlog"
    unityVersion: string
    gameName?: string
}