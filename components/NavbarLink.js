'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const NavbarLink = ({ href, text, mobile = false, onClick = () => {} }) => {
    const pathname = usePathname();

    const isActive = href === pathname;
    const activeClass = mobile ? "block text-sm px-2 py-4 text-white bg-red-600 font-semibold" : "py-4 px-2 text-red-600 border-b-4 border-red-600 font-semibold";
    const inactiveClass = mobile ? "block text-sm px-2 py-4 hover:bg-red-600 transition duration-300" : "py-4 px-2 text-white hover:text-red-600 border-b-4 border-transparent hover:border-red-600 font-semibold transition duration-300";
    const className = isActive ? activeClass : inactiveClass;


    return (
        <Link href={href} className={className} onClick={onClick}>
            {text}
        </Link>
    );
};

export default NavbarLink;