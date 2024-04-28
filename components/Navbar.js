import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSelector from './LanguageSelector';
import NavbarLink from './NavbarLink';
import Image from 'next/image';

const Navbar = () => {
    const t = useTranslations('Navigation');

    return (
        <nav className="relative z-30 bg-navy-blue text-gray-200 shadow-lg w-full">
            <div className="w-full mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    {/* Logo and association name */}
                    <Link href="/" className="flex items-center space-x-3">
                        <Image
                            src="/Logo.png"
                            width={40}
                            height={40}
                            alt="Logo"
                        />
                        <span className="hidden xl:block font-semibold">{t('Association Name')}</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-1">
                        <NavbarLink href="/" text={t('Home')} />
                        <NavbarLink href="/about" text={t('About')} />
                        <NavbarLink href="/membership" text={t('Membership')} />
                        <NavbarLink href="/events" text={t('Events')} />
                        <NavbarLink href="/gallery" text="Gallery" />
                    </div>

                    {/* Language Selector */}
                    <div className="flex flex-col items-center">
                        <LanguageSelector />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;