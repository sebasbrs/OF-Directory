import HomePage from "@/components/HomePage";
import { getTopModels } from "@/lib/api";

export const dynamic = "force-dynamic"; 

export default async function Home() {
  const models = await getTopModels(1);
  return <HomePage initialModels={models.items} />;
}
