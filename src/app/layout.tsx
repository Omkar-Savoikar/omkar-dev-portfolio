import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import TransitionProvider from "../components/TransitionProvider";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Omkar Savoikar",
	description: "Omkar Savoikar's portfolio website",
	icons: {
		icon: [
			{ url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
			{ url: "/favicon.svg", type: "image/svg+xml" },
			{ url: "/favicon.ico" },
		],
		apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
		shortcut: ["/favicon.ico"],
	},
	manifest: "/site.webmanifest",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} flex h-screen w-screen flex-col bg-linear-to-r from-blue-50 to-red-50 antialiased`}
			>
				<Navbar />
				<TransitionProvider>{children}</TransitionProvider>
			</body>
		</html>
	);
}
