import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Kinoki - Buy Kinoki Detox Foot Pads Online | Best Price in Kenya',
  description: 'Buy Kinoki Detox Foot Pads Online | Best Price in Kenya',
  generator: 'Kinoki',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1315922633573955&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code 2 */}
        
        {/* Microsoft Clarity Tracking */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t6itb8ks6p");
          `}
        </Script>
        {/* End Microsoft Clarity Tracking */}
        
        {/* Google Analytics (gtag.js) */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-R0H83709LQ" 
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R0H83709LQ');
          `}
        </Script>
        {/* End Google Analytics */}
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
