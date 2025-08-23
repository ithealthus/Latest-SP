import Script from 'next/script';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

import '@/styles/globals.css';
import 'aos/dist/aos.css';
import FloatingButton from '@/components/shared/FloatingButton';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K9SN95FK');`,
          }}
        />

        {/* ✅ Google Analytics Script (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-B64RB43YFT"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B64RB43YFT');
            `,
          }}
        />
      </head>

      <body>
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K9SN95FK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Header />
        {/* <FloatingButtons /> */}
        <main>{children}</main>
        <FloatingButton/>
        <Footer />
        <script
          defer
          src="https://india.kenyt.ai/botapp/ChatbotUI/dist/js/bot-loader.js"
          type="text/javascript"
          data-bot="50752404"
        ></script>
      </body>
    </html>
  );
}
