"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getModelProfile, getModelPosts } from "@/lib/api";


export default function ModelProfile({ model, username }: { model: any, username: string }) {
 
    const [profile, setProfile] = useState<any>(null);
  
    useEffect(() => {
      async function fetchData() {
        const profileData = await getModelProfile(username);
        setProfile(profileData);

      }
  
      fetchData();
    }, [username]);
  
    if (!profile) return <p className="text-center text-gray-500">Cargando perfil...</p>;
    return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* 🔹 Header con banner y foto de perfil */}
      <div className="relative">
        <img
          src={profile.header}
          alt="Banner"
          className="w-full h-40 object-cover"
        />
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={200}
            height={200}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* 🔹 Información del modelo */}
      <div className="text-center mt-12 p-4">
        <h2 className="text-2xl font-bold">{profile.name}</h2>
        <p className="text-gray-500">@{profile.username}</p>
        <p className="mt-2 text-sm text-gray-700">{profile.about}</p>
        <p className="mt-3 text-lg font-semibold text-blue-600">
          {profile.subscribePrice ? `$${profile.subscribePrice}/mes` : "Gratis"}
        </p>
        <a
          href={`https://onlyfans.com/${profile.username}`}
          target="_blank"
          className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600"
        >
          Suscribirse
        </a>
      </div>
    </div>
  );
}
