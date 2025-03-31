import { getModelProfile } from "@/lib/api";
import ModelProfile from "@/components/ModelProfile";
import { Metadata } from 'next';

// Definición correcta para páginas del App Router
type Props = {
  params: {
    username: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
};

// Generar Metadata Dinámica para SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = params;

  const profile = await getModelProfile(username);

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

// Página del Modelo
export default async function ModelPage({ params }: Props) {
  const { username } = params;

  console.log("params", username);
  const model = await getModelProfile(username);

  if (!model) {
    return <p className="text-center text-gray-500">Profile not found</p>;
  }

  return <ModelProfile model={model} />;
}