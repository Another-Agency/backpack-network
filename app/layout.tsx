import "#/styles/globals.css";
import { Metadata } from "next";
import Head from "next/head";
import TopBar from "./components/topBar";

export const metadata: Metadata = {
  title: "Backpack",
  description: "Self directed money orchestration",
  openGraph: {
    type: "website",
    url: "https://backpack.network",
    title: "Backpack",
    description: "Self directed money orchestration",
    siteName: "Backpack",
    images: [
      {
        url: "/favicon/favicon.ico",
        width: 36,
        height: 36,
        alt: "Backpack Favicon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // card: "summary_large_image"
    // site: "@site"
    // creator: "@creator"
    // title: "My Website"
    // description: "My Website Description"
    // image: "https://example.com/og.png"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="[color-scheme:dark]"
      style={{ fontFamily: "Space Mono, sans-serif" }}
    >
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <body className="bg-steel w-screen h-screen">
        <div className="mx-auto max-w-10xl space-y-8">
          <div className="grid grid-cols-1">
            <TopBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
