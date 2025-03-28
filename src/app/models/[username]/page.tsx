import { getModelProfile } from "@/lib/api";
import ModelProfile from "@/components/ModelProfile";

export default async function ModelPage({ params }) {
  const model = await getModelProfile(params.username);

  if (!model) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-gray-600">Modelo no encontrada</h2>
        <p className="text-gray-500">Intenta buscar otro nombre.</p>
      </div>
    );
  }

  return <ModelProfile model={model} />;
}
