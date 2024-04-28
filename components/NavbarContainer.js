import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

const NavbarContainer = () => {
    const t = useTranslations('Navigation');

    return (
        <>
            <div className='hidden md:block w-full'>
                <Navbar />
            </div>
            <div className='md:hidden w-full'>
                <NavbarMobile home={t("Home")} about={t("About")} events={t("Events")} membership={t("Membership")} gallery="Gallery" />
            </div>
        </>
    );
};

export default NavbarContainer;