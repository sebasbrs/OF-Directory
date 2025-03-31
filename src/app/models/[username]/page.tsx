"use client";
import { getModelProfile } from "@/lib/api";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ModelProfile from "@/components/ModelProfile";

export default function ModelPage() {
  const params = useParams();
  const [model, setModel] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.username) {
      getModelProfile(Array.isArray(params.username) ? params.username[0] : params.username)
        .then((data) => {
          setModel(data);
        })
        .finally(() => setLoading(false));
    }
  }, [params?.username]);
  if (loading) return <p className="text-center">Cargando...</p>;
  if (!model) return <p className="text-center text-gray-500">No se encontró el perfil.</p>;

  return (
    <ModelProfile model={model} username={Array.isArray(params.username) ? params.username[0] : params.username || ""} />
  );
}