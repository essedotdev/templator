import { Metadata } from "next";

export const siteConfig = {
  name: "Templator",
  title: "Templator - AI-First Next.js Template",
  description:
    "Next.js 15 + Drizzle + NextAuth + Cloudflare. Built for rapid development with authentication, RBAC, email flows, and edge deployment.",
  url: process.env.NEXTAUTH_URL || "http://localhost:3000",
  ogImage: "/og-image.png",
  keywords: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Drizzle ORM",
    "NextAuth",
    "Cloudflare Workers",
    "Tailwind CSS",
    "shadcn/ui",
    "Neon PostgreSQL",
    "RBAC",
    "Authentication",
    "Email Templates",
    "React Email",
    "AI-First",
    "Starter Template",
  ],
  creator: "@templator",
};

export function createMetadata({
  title,
  description,
  image,
  path = "",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const metaDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description: metaDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.creator,
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: fullTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
      creator: siteConfig.creator,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
