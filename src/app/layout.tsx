import "./globals.css";
import { Noto_Serif_Bengali, Poppins, Open_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const notoSerif = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["500", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata = {
  title: "দাতব্য সংস্থা",
  description: "বাংলা ভাষার জন্য তৈরি একটি ওয়েব অ্যাপ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${openSans.variable} ${poppins.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
