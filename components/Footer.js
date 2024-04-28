import { SocialIcon } from 'react-social-icons'
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer className="bg-gray-800 text-white p-8">
            <img src="/Logo.PNG" alt="Danish-Chinese Association Logo" className="h-16 w-auto mb-4" />
            <div className="w-full px-4 flex flex-col sm:flex-row justify-center">
                <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <p>Huset på Rymarksvej, Kultursal / Rymarksvej 3C, 2900 Hellerup.</p>
                    <p>{t('City')}</p>
                    <p>{t('Phone')}: +45 27645777</p>
                    <p>{t('Email')}: dcsca2018@outlook.com</p>
                    <p>{t('CVR')}: 39921766</p>
                    <button className="mt-4 border font-bold border-white text-white py-2 px-4 rounded hover:bg-gray-900 transition duration-300">{t('Contact Us')}</button>
                </div>
                <div className='w-full md:w-1/2 flex flex-row h-36'>
                    <div className="h-full border-l pl-4 w-1/2 mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold mb-2">{t("QuickLinks")}</h4>
                        <ul className='flex flex-col'>
                            <Link href="/">{t('Home')}</Link>
                            <Link href="/about">{t('About')}</Link>
                            <Link href="/events">{t('Events')}</Link>
                            <Link href="/membership">{t('Membership')}</Link>
                        </ul>
                    </div>
                    <div className="border-l pl-4 w-1/2">
                        <h4 className="text-lg font-semibold mb-2">{t('FollowUs')}</h4>
                        <div className="w-24 grid grid-cols-2 gap-3">
                            <SocialIcon style={{ width: '40px', height: '40px' }} url="https://facebook.com" />
                            <SocialIcon style={{ width: '40px', height: '40px' }} url="https://wechat.com" />
                            <SocialIcon style={{ width: '40px', height: '40px' }} url="https://tiktok.com" />
                            <SocialIcon style={{ width: '40px', height: '40px' }} url="https://instagram.com" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>© 2024 Danish-Chinese Sport and Culture Association</p>
            </div>
        </footer>
    )
}

export default Footer;