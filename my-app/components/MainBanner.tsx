'use client'
import  { usePathname } from "next/navigation";

export default function MainBanner(){
    const pathName = usePathname();
    if(pathName !== "/") return null;

    return (
        <div className="mx-auto max-w-4xl w-full h-32 bg-main-banner-bg-color">
        </div>
    )
}