import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/llms.txt"],
      },
      {
        userAgent: [
          "GPTBot",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
        ],
        allow: ["/", "/llms.txt"],
      },
    ],
    sitemap: "https://yourtarikur.vercel.app/sitemap.xml",
  };
}
