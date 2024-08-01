import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import { Provider } from 'jotai';

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/pretendard/Pretendard-Thin.woff',
      weight: '100',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-ExtraLight.woff',
      weight: '200',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Light.woff',
      weight: '300',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Regular.woff',
      weight: '400',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Medium.woff',
      weight: '500',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-SemiBold.woff',
      weight: '600',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Bold.woff',
      weight: '700',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-ExtraBold.woff',
      weight: '800',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Black.woff',
      weight: '900',
    },
  ],
  variable: '--pretendard',
});

export const metadata: Metadata = {
  title: 'Seoulful',
  description: 'Blah Blah',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <head>
        <Script
          type="text/javascript"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || process.env.NAVER_MAP_CLIENT_ID}&callback=initMap`}
          strategy="beforeInteractive"
        ></Script>
      </head>
      <body className="flex justify-center items-center w-full h-screen bg-black-EEE">
        <div className="relative w-[360px] h-screen bg-black-FFF overflow-auto">
          <Provider>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
