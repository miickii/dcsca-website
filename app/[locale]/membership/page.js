import Image from 'next/image';
import { useTranslations } from 'next-intl';

const MembershipPage = () => {
    const t = useTranslations("MembershipPage");

    return (
        <div className='h-full w-full'>
            <div className="flex justify-center">
                <div className="w-[80%] mx-auto pt-10 pb-5 text-center text-black border-b-4 border-crimson-red">
                    <h1 className="text-4xl font-bold">{t('BecomeAMember')}</h1>
                </div>
            </div>
            <p className="text-center text-lg mx-6 sm:mx-16 md:mx-32 my-6">
                {t('JoinCommunity')}
            </p>
            <h2 className="text-3xl font-bold text-center mt-10">{t('MembershipActivities')}</h2>
            <div className="my-6 px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10">
                <div className="flex flex-col p-6 border-b sm:border-r sm:border-b-0 border-gray-400">
                    <h3 className="text-2xl font-semibold mb-4">{t('SportsWellness')}</h3>
                    <ul className='list-disc pl-5'>{t('SportActivitiesList').split('; ').map(activity => <li key={activity}>{activity}</li>)}</ul>
                </div>

                <div className="flex flex-col p-6">
                    <h3 className="text-2xl font-semibold mb-4">{t('CulturalSocial')}</h3>
                    <ul className='list-disc pl-5'>{t('CulturalActivitiesList').split('; ').map(activity => <li key={activity}>{activity}</li>)}</ul>
                </div>
            </div>

            <div className="bg-gray-200 py-20">
                <div className="max-w-lg mx-auto grid gap-6 lg:grid-cols-2">
                    {/* Placeholder for membership cards */}
                </div>
                <div className="flex flex-row items-center justify-between px-2 md:px-20">
                    <div className='hidden md:block w-2/6 text-md'>{t('MembershipDetails').split('. ').map(detail => <p key={detail} className="mt-2">{detail}.</p>)}</div>
                    <div className="w-full md:w-3/6 bg-white p-6 border-2 border-black rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 text-center mb-5 border-b pb-2">{t('Pricing')}</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold w-1/2">{t("FamilyPackage")}</h3>
                                <span className="text-lg font-bold text-green-600">1000 DKK</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">{t("RegularIndividual")}</h3>
                                <span className="text-lg font-bold text-green-600">600 DKK</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">{t("PensionersStudents")}</h3>
                                <span className="text-lg font-bold text-green-600">400 DKK</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">{t("CorporateMembership")}</h3>
                                <span className="text-lg font-bold text-green-600">2500 DKK</span>
                            </div>
                        </div>

                        <div className='mt-6 bg-gray-100 p-4 rounded md:hidden'>{t('MembershipDetails').split('. ').map(detail => <p key={detail} className="text-sm text-gray-700 mt-2">{detail}.</p>)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipPage;