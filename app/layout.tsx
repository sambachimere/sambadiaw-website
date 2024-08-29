import "./globals.css";

import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";
import { Header } from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samba Diaw",
  description: "Samba Diaw is a developer.",
  openGraph: {
    title: "Samba Diaw",
    description: "Samba Diaw is a developer.",
    url: "https://sambadiaw.com",
    siteName: "Samba Diaw",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SambaDiaw_",
    creator: "@SambaDiaw_",
  },
  metadataBase: new URL("https://sambadiaw.com"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-5xl m-auto">
        <main className="p-5  md:pt-5 min-h-screen">
          <Header />
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  );
}
