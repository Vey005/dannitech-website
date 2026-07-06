import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DanniTech Solutions | Smart Technology Solutions in Ghana",
  description:
    "DanniTech Solutions builds websites, POS systems, school management systems, food ordering systems, hardware support, and custom business software for Ghanaian businesses.",
  keywords: [
    "DanniTech Solutions",
    "Ghana website design",
    "POS systems Ghana",
    "school management system Ghana",
    "business software Accra",
  ],
  openGraph: {
    title: "DanniTech Solutions",
    description:
      "Smart technology solutions for websites, POS systems, school platforms, ordering systems, IT support, and custom business software.",
    type: "website",
    locale: "en_GH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
