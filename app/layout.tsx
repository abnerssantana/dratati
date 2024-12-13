import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import { Metadata } from "next";
import "./globals.css";

const sfPRO = localFont({
  src: [
    {
      path: "./fonts/sf-pro-display_thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sfpro",
});

const siteUrl = "https://vercel.app";
const description = "Especialista em odontopediatria, dedicada a criar experiências positivas e sorrisos saudáveis. No consultório da Dra. Tatiana, cada atendimento é personalizado, combinando técnica moderna com um ambiente acolhedor, proporcionando aos pequenos pacientes um cuidado especial desde a primeira infância.";
const title = "Dra. Tatiana - Odontopediatria Especializada";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    images: [
      {
        url: '/shared.png',
        width: 1200,
        height: 630,
        alt: 'Dra. Tatiana - Odontopediatria Especializada',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/shared.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="pt-BR" suppressHydrationWarning>
      <body className={sfPRO.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}