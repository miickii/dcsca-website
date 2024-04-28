import Image from 'next/image';
import { FaExchangeAlt, FaHeartbeat, FaTags, FaRunning, FaGlobeAsia, FaUsers, FaSeedling } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const About = () => {
    const t = useTranslations("AboutPage");
    const categories = [
        {
          icon: <FaRunning className="text-4xl text-crimson-500" />,
          title: t('HealthyLifestyle'),
          description: t('LifestyleDescription'),
        },
        {
          icon: <FaGlobeAsia className="text-4xl text-crimson-500" />,
          title: t('CulturalExchange'),
          description: t('ExchangeDescription'),
        },
        {
          icon: <FaUsers className="text-4xl text-crimson-500" />,
          title: t('SocialEngagement'),
          description: t('SocialEngagementDescription'),
        },
        {
          icon: <FaSeedling className="text-4xl text-crimson-500" />,
          title: t('PersonalDevelopment'),
          description: t('PersonalDevelopmentDescription'),
        },
    ];

    return (
        <div className="bg-white">
            <div className='relative text-center text-white text-5xl py-20 md:py-40 border-b-8 border-crimson-red'>
                <div className='absolute inset-0 bg-black opacity-80'></div>
                <Image 
                    src="/team.JPG"
                    alt={t('CulturalBanner')}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center 70%' }}
                    priority
                />
                <div className='absolute inset-0 flex items-center justify-center z-10'>
                    <h1 style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.50)' }}>{t('AboutUs')}</h1>
                </div>
            </div>

            <div className='py-24 w-full flex justify-center' data-aos="fade-up">
                <div className='flex flex-col md:flex-row px-10 md:px-0 md:w-4/5 lg:w-2/3 border-b pb-5'>
                    <h2 className="md:w-1/3 text-2xl md:text-2xl mr-10 font-bold text-gray-800">{t('ConnectingCultures')}</h2>
                    <p className="md:w-2/3 text-xl md:text-xl text-gray-600 mt-2">{t('OrgDescription')}</p>
                </div>
            </div>

            <div className='py-8 text-center bg-[#5876d2]'>
                <div className="flex flex-col md:flex-row justify-center items-start text-[#ff3737] py-10">
                    <div className="flex flex-col items-center mx-4 mb-10 md:mb-0" data-aos="fade-up" data-aos-delay="100">
                        <FaExchangeAlt className="text-6xl mb-2" />
                        <h2 className="text-xl md:text-3xl font-bold mb-3">{t('CulturalExchange')}</h2>
                        <p className="text-base text-white">{t('ExchangeDescription')}</p>
                    </div>
                    <div className="flex flex-col items-center mx-4 mb-10 md:mb-0" data-aos="fade-up" data-aos-delay="200">
                        <FaHeartbeat className="text-6xl mb-2" />
                        <h2 className="text-xl md:text-3xl font-bold mb-3">{t('HealthyLifestyle')}</h2>
                        <p className="text-base text-white">{t('LifestyleDescription')}</p>
                    </div>
                    <div className="flex flex-col items-center mx-4" data-aos="fade-up" data-aos-delay="300">
                        <FaTags className="text-6xl mb-2" />
                        <h2 className="text-xl md:text-3xl font-bold mb-3">{t('Affordability')}</h2>
                        <p className="text-base text-white">{t('AffordabilityDescription')}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start py-28">
                <div className="flex items-center justify-center w-full md:w-1/2 md:border-b-0 md:border-r md:border-gray-300">
                    <Image src="/bordtennis.jpg" alt={t('Description')} width={500} height={300} className="object-cover" />
                </div>

                <div className="w-2/3 md:w-1/2 pt-5 md:px-10">
                    <h2 className="text-lg md:text-xl font-bold text-gray-800">{t('OpportunitiesTitle')}</h2>
                    <p className="text-sm md:text-base text-gray-600 mt-2">{t('OpportunitiesDescription')}</p>
                </div>
            </div>

            <div className="max-full mx-auto px-14 md:px-6">
                <h2 className="text-3xl font-bold text-center mb-10">{t('OurOffers')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div key={index} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                            <div>{category.icon}</div>
                            <h3 className="mt-5 font-semibold text-xl">{category.title}</h3>
                            <p className="mt-2 text-gray-600">{category.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='text-center pb-20 pt-40 bg-fast-gradient'>
                <h1 className='text-4xl text-black font-bold mb-10'>{t('OurBoard')}</h1>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start py-10 md:space-x-32">
                    <div className="text-center">
                        <Image src="" alt={`name, role`} width={48} height={48} className="object-cover rounded-full shadow-lg" />
                        <h3 className="text-xl font-medium text-gray-800 mt-4">Jesper Egelund</h3>
                        <p className="text-gray-600">Næstformand</p>
                    </div>
                    <div className="text-center">
                        <Image src="" alt={`name, role`} width={48} height={48} className="object-cover rounded-full shadow-lg" />
                        <h3 className="text-xl font-medium text-gray-800 mt-4">Junxuan Mao</h3>
                        <p className="text-gray-600">Formand</p>
                    </div>
                    <div className="text-center">
                        <Image src="" alt={`name, role`} width={48} height={48} className="object-cover rounded-full shadow-lg" />
                        <h3 className="text-xl font-medium text-gray-800 mt-4">William Chee</h3>
                        <p className="text-gray-600">Næstformand</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;