import { getTopModels } from "@/lib/api";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const models = await getTopModels(1); // Obtiene los modelos del API

  return models.items.map((model: { username: string }) => ({
    url: `https://of-directory.vercel.app/models/${model.username}`,
    lastModified: new Date().toISOString(),
  }));
}
