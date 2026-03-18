import type { Metadata } from "next";
import { DM_Sans, Libre_Baskerville } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-dm-sans",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Júlia Scucuglia — Senior Product Designer",
  description:
    "Senior Product Designer based in São Paulo, creating coherent and satisfying experiences from start to finish.",
  icons: {
    icon: {
      url: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiPjxwYXRoIGQ9Ik01MCAwQzUwIDAgNTAuNjAyNSAyNy4yNjggNjEuNjY3MyAzOC4zMzI3QzcyLjczMiA0OS4zOTc1IDEwMCA1MCAxMDAgNTBDMTAwIDUwIDcyLjczMiA1MC42MDI1IDYxLjY2NzMgNjEuNjY3M0M1MC42MDI1IDcyLjczMiA1MCAxMDAgNTAgMTAwQzUwIDEwMCA0OS4zOTc1IDcyLjczMiAzOC4zMzI3IDYxLjY2NzNDMjcuMjY4IDUwLjYwMjUgMCA1MCAwIDUwQzAgNTAgMjcuMjY4IDQ5LjM5NzUgMzguMzMyNyAzOC4zMzI3QzQ5LjM5NzUgMjcuMjY4IDUwIDAgNTAgMFoiIGZpbGw9IiUyMzdCNkVFOCIvPjwvc3ZnPg==",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${libreBaskerville.variable}`}>
      <body>
          <Nav />
          {children}
          <Footer />
        </body>
    </html>
  );
}
