import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const LearnMore = ({ href }) => {
    const { t } = useTranslation();

    return (
        href ? (
            <Link href={href} className='border-2 font-bold border-crimson-red text-black py-2 px-4 rounded hover:bg-[#E75C68] transition duration-300'>
                {t('LearnMore')}
            </Link>
        ) : null
    );
};

export default LearnMore;