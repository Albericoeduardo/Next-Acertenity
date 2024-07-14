import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://albericoportfolio.vercel.app/"),

	title: "Albérico Eduardo",
	authors: {
		name: "chensokheng",
	},

	description:
		"Based in Brasil, I'm a FullStack developer passionate about building morden applications.",
	openGraph: {
		title: "Albérico Eduardo",
		description:
			"Based in Brasil, I'm a FullStack developer passionate about building morden applications.",
		url: "https://albericoportfolio.vercel.app/",
		siteName: "Albérico Eduardo",
		images: "/og.png",
		type: "website",
	},
	keywords: ["Albérico", "Portfolio"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
