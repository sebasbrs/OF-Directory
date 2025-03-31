import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Ads from "@/components/Ads";
import AdsScript from "@/components/AdsScript";
import { ReactNode } from "react";

declare global {
  interface Window {
    adsbyjuicy?: unknown[];
  }
}


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Only Fans Directory</title>
        <meta name="juicyads-site-verification" content="04321ba5bf22611c2b9d166f5d0059a2"></meta>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <script type="text/javascript" src="https://js.juicyads.com/jp.php?c=44542313t214u4r2o2c4z2d484&u=http%3A%2F%2Fwww.juicyads.rocks"></script>
      </head>
      <body className="bg-primary text-gray-900">
        <Header />
        <AdsScript />
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
            <div className="row-span-5">
            <Ads adzone={"1086247"} adheight={"600"} adwidth={"160"} />
            </div>
            <div className="col-span-3 row-span-4"><Ads adzone={"1086245"} adheight={"90"} adwidth={"728"}/>{children}</div>
            <div className="row-span-5 col-start-5">
            <Ads adzone={"1086254"} adheight={"600"} adwidth={"160"}/>
            </div>
            <div className="col-span-3 col-start-2 row-start-5">
            <Ads adzone={"1086242"} adheight={"290"} adwidth={"774"}/>
            </div>
        </div>
        <Footer />
        <Ads adzone={"1086245"} adheight={"90"} adwidth={"728"}/>
        <script src="/js/ads.js"></script>
      </body>
    </html>
  );
}