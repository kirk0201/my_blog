import Link from 'next/link';
import NavLink from './NavLink';

export default function Header(){
    return(
    <header className='border-b'>
        <nav className='mx-auto flex items-center justify-between max-w-4xl bg-red-500 px-4 py-4'>
            <Link href="/">home</Link>
            <div className='flex border-b gap-4'>
                <NavLink href="/about">menu1</NavLink>
                <NavLink href="/blog">menu1</NavLink>
            </div>
        </nav>
    </header>
    )
}