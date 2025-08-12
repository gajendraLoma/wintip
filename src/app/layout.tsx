import clsx from 'clsx';
import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const inter = Inter({subsets: ['latin']});

type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({children}: Props) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={clsx(
          'flex min-h-[100vh] flex-col bg-slate-100',
          inter.className
        )}
      >
        <NextIntlClientProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
