import Link from "next/link";

export default function ModelCard({ model }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img
        src={model.avatar}
        alt={model.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold">{model.name}</h3>
        <p className="text-gray-500">@{model.username}</p>
        <p className="text-sm text-blue-600 font-semibold mt-2">
          {model.subscribePrice ? `$${model.subscribePrice}/mes` : "Gratis"}
        </p>
        <Link
          href={`/models/${model.username}`}
          className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600"
        >
          Ver perfil
        </Link>
      </div>
    </div>
  );
}
