import { getTopModels } from "@/lib/api";
import ModelCard from "@/components/ModelCard";

export default async function Home() {
  const data = await getTopModels();
  const models = data.items || [];

  return (
    <div>
      <h2 className="text-2xl font-bold my-4">Modelos Populares</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {models.map((model) => (
          <ModelCard key={model.username} model={model} />
        ))}
      </div>
    </div>
  );
}
