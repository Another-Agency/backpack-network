import "#/styles/globals.css";
import { Metadata } from "next";
import TopBar from "./components/topBar";

export const metadata: Metadata = {
  title: {
    default: "Next.js App Router",
    template: "%s | Next.js App Router",
  },
  description:
    "Backpack is a way to orchestrate your money. Self custody, so you are in control.",
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
