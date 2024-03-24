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
    description: '专注分享当下最实用的前端技术。关注前端达人，与达人一起学习进步！',
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

                <Script
                    src="https://hm.baidu.com/hm.js?803d8995d7e5b99ff7bdadd582ca9b66"
                />
            </body>




        </html>

    );
}
