import { getModelProfile } from "@/lib/api";
import ModelProfile from "@/components/ModelProfile";

interface Props {
  params: {
    username: string;
  };
}

// 🔹 Generar Metadata Dinámica para SEO
export async function generateMetadata({ params }: Props) {
  const profile = await getModelProfile(params.username);

  if (!profile) {
    return {
      title: "Profile not found - OnlyFans Directory",
      description: "This profile doesn't exists in OnlyFans.",
    };
  }

  return {
    title: `${profile.username} - OnlyFans Directory`,
    description: `${profile.name}'s profile in OnlyFans. ${profile.about}`,
    openGraph: {
      title: `${profile.name} - OnlyFans Directory`,
      description: profile.about,
      images: [{ url: profile.avatar }],
    },
  };
}

// 🔹 Página del Modelo
export default async function ModelPage({ params }: Props) {
  const model = await getModelProfile(params.username);

  if (!model) {
    return <p className="text-center text-gray-500">Profile not found</p>;
  }

  return <ModelProfile model={model} />;
}
