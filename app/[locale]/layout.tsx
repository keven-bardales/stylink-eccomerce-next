import Footer from '@/components/shared/client/footer/footer';
import Navbar from '@/components/shared/client/navbar/navbar';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  let messages;
  try {
    messages = (await import(`../../locales/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  // Validate that the incoming `locale` parameter is a valid locale

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <Navbar />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
