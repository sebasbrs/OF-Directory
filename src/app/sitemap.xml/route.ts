import { getTopModels } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET() {
  const models = await getTopModels(1); // Llamada a la API en runtime

  if (!models || !models.items) {
    return new NextResponse("Error generating sitemap", { status: 500 });
  }

  const urls = models.items.map((model: { username: string }) => `
    <url>
      <loc>https://of-directory.vercel.app/models/${model.username}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  `).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "text/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
