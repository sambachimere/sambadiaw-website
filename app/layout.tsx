import "./globals.css";

import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samba Diaw",
  // description: "I am a developer",
  openGraph: {
    title: "Samba Diaw",
    // description: "I am a developer",
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

      <body className="dark:text-gray-100 m-auto">
        <main>{children}</main>

        <Analytics />
      </body>
    </html>
  );
}
