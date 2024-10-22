import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Restonic Jundiaí",
  description: "",
  icons: {
    icon: './favicon.ico', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className=" !scroll-smooth">
      <head>

      <script src="login.js" type="text/javascript"></script>
      <script src="script.js" type="text/javascript"></script>

      <link href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css" rel="stylesheet" />
      
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap"
        rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/tw-elements/css/tw-elements.min.css" />

      </head>

      <Script id="gtm" strategy="afterInteractive">
      {
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-KGW7Z4LV');
      }
    </Script>

      <body className={montserrat.className} >


        {/*      <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KGW7Z4LV"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        {/*<!-- End Google Tag Manager (noscript) --> */}


        {children}
      <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>

      </body>
    </html>
  );
}
