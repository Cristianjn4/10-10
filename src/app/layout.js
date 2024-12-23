import { Montserrat } from "next/font/google";
import "./globals.css";
import { GoogleTag } from "";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Restonic | Orner Quartos",
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
      
      <body className={montserrat.className} >
        {children}
      <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
