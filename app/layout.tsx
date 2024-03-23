import ProviderComponent from '@/components/layouts/provider-component';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/tailwind.css';
import { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Script from "next/script";



export const metadata: Metadata = {
    title: {
        template: '%s | 前端达人',
        default: '前端达人',
    },
};
const nunito = Nunito({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nunito',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (

        <html lang="zh-cn">
            <body className={nunito.variable}>
                <ProviderComponent>{children}</ProviderComponent>
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9337558103292164"
                    crossOrigin="anonymous"
                    strategy="afterInteractive"

                />
            </body>




        </html>

    );
}
