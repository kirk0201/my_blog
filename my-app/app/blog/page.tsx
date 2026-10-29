import type { Metadata } from "next"
import DetailPage from "@/components/DetailPage";
import {posts} from "@/data/posts";

export const metadata: Metadata = {
    title: "Blog",
    description: ""
}
export default function Blog(){
    const document = posts.map((item, idx)=> {
        return(
            <div>
                
            </div>
        )
    })
    return (
        <div className="w-full gap-4">
            {document}
        </div>
    )
}