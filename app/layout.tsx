import type { Metadata } from "next";
import VideoBackground from "./components/background";
import Navegator from "./components/Navegator";
import BackgroundSound from "./components/SoundManager";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rhyan Araujo | Android Developer",
  description: "Created by @oiRhyan",
  icons : {
    icon: ['/favicon.ico?v=4'],
    apple: ['/images/apple.png?v=4'],
    shortcut: ['/images/apple.png?v=4']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
        <BackgroundSound src={"/images/ambience.mp3"}/>
        <VideoBackground/>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          {children}
          <Navegator />
        </div>
      </body>
    </html>
  );
}
