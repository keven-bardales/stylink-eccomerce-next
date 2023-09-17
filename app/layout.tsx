import { Poppins } from 'next/font/google';
import { cookies } from 'next/headers';
import { twMerge } from 'tailwind-merge';
import './globals.css';

const inter = Poppins({ weight: '400', subsets: ['latin-ext'] });

export async function generateMetadata() {
  // const t = await getTranslator(params.locale, 'metadata.layout');

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_MAIN_API_URL as string),
    title: {
      default: 'Stylink',
      template: '%s | Stylink',
    },
    description: 'Personalizamos tus camisas, hoodies, totebags, tazas y más. Bienvenido a Stylink Hns',
    verification: {
      google: 'google-site-verification=3Q4',
    },
    openGraph: {
      type: 'website',
      locale: 'es_HN',
      url: 'https://stylinkhn.com',
      siteName: 'Stylink',
      alternateLocale: ['en'],
    },
    keywords: ['Stylink', 'Honduras', 'Personalizar', 'Camisas', 'Hoodies', 'Totebags', 'Tazas', 'Personalizados'],
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = cookies().get('NEXT_LOCALE');

  return (
    <html lang={locale?.value ?? 'es'}>
      <body className={twMerge('theme-dark', inter.className)}>{children}</body>
    </html>
  );
}
