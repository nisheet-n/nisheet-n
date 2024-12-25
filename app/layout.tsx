import type { Metadata } from "next";
import { Inter, Architects_Daughter, Comic_Neue, Indie_Flower, Rubik_Doodle_Shadow } from "next/font/google";
import "./globals.css";

const rubicDoodle = Rubik_Doodle_Shadow({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-rubic-doodle-shadow',
});

const comicNeue = Comic_Neue({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-comic-neue',
})

export const metadata: Metadata = {
  title: "Nisheet's Resume",
  description: "Portfolio & Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[url('/assets/images/background-image.jpg')] bg-cover bg-fixed bg-center no-repeat">
        <main className={`${rubicDoodle.variable} ${comicNeue.variable} max-w-4xl mx-auto rounded-lg my-8 md:my-16`}>
          {children}
        </main>
      </body>
    </html>
  );
}
