import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Tutorial I used: https://www.youtube.com/watch?v=uZQ5d2bRMO4&ab_channel=CandDev
 
// Can be imported from a shared config
const locales = ['en', 'da', 'zh'];
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();
 
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});