import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import { Provider } from 'jotai';

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/pretendard/Pretendard-Thin.woff2',
      weight: '100',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-ExtraLight.woff2',
      weight: '200',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Light.woff2',
      weight: '300',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Bold.woff2',
      weight: '700',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-ExtraBold.woff2',
      weight: '800',
    },
    {
      path: '../../public/fonts/pretendard/Pretendard-Black.woff2',
      weight: '900',
    },
  ],
  variable: '--pretendard',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Seoulful',
  description:
    '서울을 무대로 한 문화생활 정보 플랫폼, Seoulful 입니다! 서울에서 열리는 다양한 문화행사 정보를 확인하실 수 있습니다 ! Seoulful과 함께 풍성한 문화생활을 즐겨보세요!',
  icons: '/assets/seoulful-logo.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <head>
        <link rel="icon" href="/assets/seoulful-favicon.svg" />
        <Script
          type="text/javascript"
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || process.env.NAVER_MAP_CLIENT_ID}&callback=initMap`}
          strategy="beforeInteractive"
        ></Script>
      </head>
      <body className="flex justify-center items-center w-full h-screen bg-black-EEE">
        <div className="relative w-[360px] h-screen bg-black-FFF overflow-auto">
          <Provider>{children}</Provider>
          <div id="portal"></div>
        </div>
      </body>
    </html>
  );
}
