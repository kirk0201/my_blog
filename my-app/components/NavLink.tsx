'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type NavLinkProps = {
    href: string
    children: React.ReactNode
}
export default function NavLink({ href, children }:NavLinkProps){
    const pathName = usePathname();
    const isActive = pathName == href || pathName.startsWith(`${href}/`);

    return (
    <Link href={href} className={isActive ? 'font-bold underline' : 'text-gray-500'}>
        {children}
    </Link>
    )
}