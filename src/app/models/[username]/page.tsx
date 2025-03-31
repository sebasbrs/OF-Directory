import { getModelProfile } from "@/lib/api";
import ModelProfile from "@/components/ModelProfile";
interface PageProps {
  params: {
    username: string;
  };
}

// 🔹 Generar Metadata Dinámica para SEO
export async function generateMetadata({ params }: PageProps) {
  const profile = await getModelProfile(params.username);

  if (!profile) {
    return {
      title: "Profile not found - OnlyFans Directory",
      description: "This profile doesn't exist in OnlyFans Directory.",
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
export default async function ModelPage({ params }: PageProps) {
  console.log("params", params.username);
  const model = await getModelProfile(params.username);

  if (!model) {
    return <p className="text-center text-gray-500">Profile not found</p>;
  }

  return <ModelProfile model={model} />;
}
