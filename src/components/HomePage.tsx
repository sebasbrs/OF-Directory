"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getTopModels } from "@/lib/api";
import ModelCard from "./ModelCard";

export default function HomePage({ initialModels }: { initialModels: any[] }) {
  const [search, setSearch] = useState("");
  const [models, setModels] = useState(initialModels);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();

  async function loadMore() {
    setLoading(true);
    try {
      const newModels = await getTopModels(page);
      setModels((prev) => [...prev, ...newModels.items]);
      setHasMore(newModels.items.length > 0);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error Loading more Models:", error);
    }
    setLoading(false);
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/models/${search.trim()}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* 🔹 Barra de Búsqueda */}
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search a model by Username..."
          className="border p-2 w-full rounded-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Search Now
        </button>
      </form>

      {/* 🔹 Lista de Modelos */}
      <h1 className="text-center text-2xl font-bold mb-4">Models with Recent Post</h1>
      <div className="grid grid-cols-2 gap-4">
        {models.length > 0 ? (
          models.map((model) => <ModelCard key={model.username} model={model} />)
        ) : (
          <p className="col-span-2 text-center text-gray-500">No Models Found</p>
        )}
      </div>

      {/* 🔹 Botón de Cargar Más */}
      {hasMore && (
        <button
          className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={loadMore}
          disabled={loading}
        >
          {loading ? "Loading more Models..." : "Load More Models"}
        </button>
      )}
    </div>
  );
}
