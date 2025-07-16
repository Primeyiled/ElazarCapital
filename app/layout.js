import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "@/lib/StoreProvider";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";
// import OnlineChecker from "./OnlineChecker";

const switzerRegular = localFont({
  src: "./fonts/Switzer-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-switzer",
});

const switzerBold = localFont({
  src: "./fonts/Switzer-Bold.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-switzer-bold",
});

const switzerItalic = localFont({
  src: "./fonts/Switzer-Semibold.ttf",
  weight: "400",
  style: "italic",
  variable: "--font-switzer-italic",
});

export const metadata = {
  title: "HomePage - ElazarCapital",
  description: `ElazarCapital is a regulated broker and financial services provider for 
            traders across the world. We are also one of the fastest growing
            online brokers with an asset index of over 1,000 stocks, forex,
            commodities and indices available as CFDs.`,
};

function RootLayout({ children }) {
  return (
    <html lang={"en"}>
      <head>
        {/* Smartsupp Live Chat Script */}
        <Script id="smartsupp-chat" strategy="afterInteractive">
          {`
            var _smartsupp = _smartsupp || {};
            _smartsupp.key = 'dadc9e176f9f3627d849fec6533fa93099c1b0eb';
            window.smartsupp||(function(d) {
              var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
              s=d.getElementsByTagName('script')[0];c=d.createElement('script');
              c.type='text/javascript';c.charset='utf-8';c.async=true;
              c.src='https://www.smartsuppchat.com/loader.js?';
              s.parentNode.insertBefore(c,s);
            })(document);
          `}
        </Script>
      </head>
      <body
        className={`${switzerRegular.variable} ${switzerBold.variable} ${switzerItalic.variable} antialiased`}
      >
        {/* <OnlineChecker /> */}
        <StoreProvider>
          {children}

          <CookieConsent />
        </StoreProvider>
      </body>
    </html>
  );
}

export default RootLayout;
