import Image from "next/image";

export default function ModelProfile({ model }) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* 🔹 Header con banner y foto de perfil */}
      <div className="relative">
        <img
          src={model.banner}
          alt="Banner"
          className="w-full h-40 object-cover"
        />
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <Image
            src={model.profile_picture}
            alt={model.name}
            width={100}
            height={100}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* 🔹 Información del modelo */}
      <div className="text-center mt-12 p-4">
        <h2 className="text-2xl font-bold">{model.name}</h2>
        <p className="text-gray-500">@{model.username}</p>
        <p className="mt-2 text-sm text-gray-700">{model.about}</p>
        <p className="mt-3 text-lg font-semibold text-blue-600">
          {model.subscription_price ? `$${model.subscription_price}/mes` : "Gratis"}
        </p>
        <a
          href={`https://onlyfans.com/${model.username}`}
          target="_blank"
          className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600"
        >
          Suscribirse
        </a>
      </div>

      {/* 🔹 Últimos posts */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-3">Últimos posts</h3>
        {model.posts.length > 0 ? (
          <div className="grid grid-cols-2 gap-2">
            {model.posts.map((post, index) => (
              <img key={index} src={post.image} alt="Post" className="rounded-md shadow-md" />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No hay publicaciones recientes.</p>
        )}
      </div>
    </div>
  );
}
