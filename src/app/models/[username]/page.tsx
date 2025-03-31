import { getModelProfile } from "@/lib/api";
import ModelProfile from "@/components/ModelProfile";

export async function generateMetadata({ params }: { params: { username: string } }) {
  const profile = await getModelProfile(params.username);

  return {
    title: `${profile.username} - OnlyFans Directory`,
    description: `${profile.name}'s profile in OnlyFans. ${profile.about}`,
    openGraph: {
      title: `${profile.name} - OnlyFans Directory`,
      description: profile.about,
      images: [profile.avatar],
    },
  };
}

export default async function ModelPage({ params }: { params: { username: string } }) {
  const model = await getModelProfile(params.username);

  if (!model) {
    return <p className="text-center text-gray-500">No se encontró el perfil.</p>;
  }

  return <ModelProfile model={model} />;
}
