'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

const LanguageSelector = () => {
    const router = useRouter();
    const localActive = useLocale();

    const changeLanguage = (language) => {
        const nextLocale = language;
        document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`
        router.refresh();
    }

    return (
        <div className='relative flex space-x-3'>
            <button
                onClick={() => changeLanguage("en")}
                className={`rounded-md shadow-sm overflow-hidden inline-block ${localActive === "en" ? 'scale-125' : 'scale-100'} transition duration-200`}
            >
                <img 
                    src={`/en.svg`} 
                    alt="English" 
                    className="rounded-full shadow-sm" 
                    style={{ width: '25px', height: '25px' }} 
                />
            </button> 
            <button
                onClick={() => changeLanguage("da")}
                className={`rounded-md shadow-sm overflow-hidden inline-block ${localActive === "da" ? 'scale-125' : 'scale-100'} transition duration-200`}
            >
                <img 
                    src={`/da.svg`} 
                    alt="Dansk" 
                    className="rounded-full shadow-sm" 
                    style={{ width: '25px', height: '25px' }} 
                />
            </button> 
            <button
                onClick={() => changeLanguage("zh")}
                className={`rounded-md shadow-sm overflow-hidden inline-block ${localActive === "zh" ? 'scale-125' : 'scale-100'} transition duration-200`}
            >
                <img 
                    src={`/zh.svg`} 
                    alt="中文" 
                    className="rounded-full shadow-sm" 
                    style={{ width: '25px', height: '25px' }} 
                />
            </button> 
        </div>
    );
};

export default LanguageSelector;