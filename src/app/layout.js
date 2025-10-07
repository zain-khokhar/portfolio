import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './components/ThemeProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zain Ul Abdin - MERN & Next.js Developer",
  description: "Full Stack Developer specializing in MERN stack and Next.js. Building modern, scalable web applications with 150+ LeetCode problems solved.",
  keywords: "MERN developer, Next.js developer, Full Stack Developer, React, Node.js, MongoDB, JavaScript, Portfolio",
  authors: [{ name: "Zain Ul Abdin" }],
  creator: "Zain Ul Abdin",
  openGraph: {
    title: "Zain Ul Abdin - MERN & Next.js Developer",
    description: "Full Stack Developer specializing in MERN stack and Next.js",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zain Ul Abdin - MERN & Next.js Developer",
    description: "Full Stack Developer specializing in MERN stack and Next.js",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
