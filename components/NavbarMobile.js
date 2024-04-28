'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import LanguageSelector from './LanguageSelector';
import NavbarLink from './NavbarLink';
import { motion } from 'framer-motion';
import Image from 'next/image';

const NavbarMobile = ({ home, about, events, membership, gallery}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const variants = {
        open: { opacity: 1, height: 'auto' },
        closed: {height: 0 },
    };

    return (
        <nav className="relative z-30 bg-navy-blue text-gray-200 shadow-lg w-full">
            <div className="w-full mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    {/* Logo and association name */}
                    <Link href="/" className="flex items-center space-x-3">
                        <Image
                            src="/websiteLogo.png"
                            width={40}
                            height={40}
                            alt="Logo"
                        />
                    </Link>

                    <div className="flex items-center">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="outline-none mobile-menu-button">
                            <svg className="w-6 h-6 text-white hover:text-gray-200"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <motion.div
                initial="closed"
                animate={isMobileMenuOpen ? 'open' : 'closed'}
                variants={variants}
                transition={{ duration: 0.3 }}
                className="z-20 absolute w-full bg-navy-blue shadow-md border-t-2 border-gray-700"
                style={{ overflow: 'hidden'}}
            >
                <ul>
                    <NavbarLink href="/" text={home} mobile={true} onClick={closeMobileMenu} />
                    <NavbarLink href="/about" text={about} mobile={true} onClick={closeMobileMenu} />
                    <NavbarLink href="/events" text={events} mobile={true} onClick={closeMobileMenu} />
                    <NavbarLink href="/membership" text={membership} mobile={true} onClick={closeMobileMenu} />
                    <NavbarLink href="/gallery" text={gallery} mobile={true} onClick={closeMobileMenu} />
                </ul>
                <div className="flex flex-col items-center relative pt-2 pb-4 w-full">
                    <LanguageSelector />
                </div>
            </motion.div>
        </nav>
    );
};

export default NavbarMobile;