import { AppConfig } from "@/app.config";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { getData } from "@/data";
// import { Image } from "next/image";

const data = getData();

export const metadata: Metadata = {
  title: data.name,
  description: data.summary,
  openGraph: {
    title: data.name,
    description: data.summary,
    images: [`/locale/${AppConfig.defaultLocale}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`/locale/${AppConfig.defaultLocale}/og-image.png`],
  },
};

export default function RootPage() {
  return (
    redirect(AppConfig.defaultLocale)
  );
}
