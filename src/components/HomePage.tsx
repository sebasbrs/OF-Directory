"use client";
import { useState,useEffect } from "react";
import { getTopModels } from "@/lib/api";
import ModelCard from "./ModelCard";

export default function HomePage({ initialModels }: { initialModels: any[] }) {
  const [search, setSearch] = useState("");
  const [models, setModels] = useState(initialModels);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const filteredModels = models.filter((model) =>
    model.name.toLowerCase().includes(search.toLowerCase()) ||
    model.username.toLowerCase().includes(search.toLowerCase())
    );

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

  return (
    <div className="max-w-4xl mx-auto p-4">
      <input
        type="text"
        placeholder="Search a Model..."
        className="border p-2 w-full rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h1 className="text-center text-2xl font-bold mb-4">Models With recent posts</h1>
      <div className="grid grid-cols-2 gap-4">
      {filteredModels.length > 0 ? (
          filteredModels.map((model) => (
            <ModelCard key={model.username} model={model} />
        ))
        ) : (
          <p className="col-span-2 text-center text-gray-500">No models found</p>
        )}
      </div>

      {hasMore && (
        <button
          className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={loadMore}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}