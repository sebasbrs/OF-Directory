import { getTopModels } from "@/lib/api";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const models = await getTopModels(1); // Tomamos los primeros modelos

  const urls = models.items.map((model: { username: any; }) => `
    <url>
      <loc>https://of-directory.vercel.app/models/${model.username}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>`).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.send(sitemap);
}
