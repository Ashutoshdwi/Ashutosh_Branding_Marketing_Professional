import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Ashutosh Dwivedi | Branding & Marketing Professional",
  description:
    "Portfolio of Ashutosh Dwivedi — branding, marketing, campaigns, exhibitions, storytelling, film, and content strategy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}