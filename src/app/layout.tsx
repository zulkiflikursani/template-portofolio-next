import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steve Dev",
  description: "Web Designer",
  itunes: {
    appId: "myAppStoreID",
    appArgument: "myAppArgument",
  },
  appleWebApp: {
    title: "Apple Web App",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/faticon.ico",
      {
        url: "/faticon.ico",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  userScalable: false,
  themeColor: "black",
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "font-poppin"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
