"use client";
import Image from "next/image";

export default function ModelProfile({ model}: { model: any }) {
 
    // const [profile, setProfile] = useState<any>(null);
  
    // useEffect(() => {
    //   async function fetchData() {
    //     const profileData = await getModelProfile(username);
    //     setProfile(profileData);

    //   }
  
    //   fetchData();
    // }, [username]);  
    // if (!profile) return <p className="text-center text-gray-500">Loading Profile...</p>;
     return (

    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* 🔹 Header con banner y foto de perfil */}
      <div className="relative">
        <img
          src={model.header}
          alt="Banner"
          className="w-full h-40 object-cover"
        />
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <Image
            src={model.avatar}
            alt={model.name}
            width={110}
            height={110}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* 🔹 Información del modelo */}
      <div className="text-center mt-12 p-4">
        <h2 className="text-2xl font-bold">{model.name}</h2>
        <p className="text-gray-500">@{model.username}</p>
        <p className="mt-2 text-sm text-gray-700"  dangerouslySetInnerHTML={{ __html: model.about }}></p>
        <a
          href={`https://onlyfans.com/${model.username}`}
          target="_blank"
          className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600"
        >
          GET HER CONTENT NOW
        </a>
      </div>
      <div className="border-t border-gray-200 mt-4">
        <div className="flex justify-between p-4">
          <div className="text-center">
            <p className="text-gray-500">Posts</p>
            <p className="font-bold">{model.postsCount}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500">Photos</p>
            <p className="font-bold">{model.photosCount}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500">Videos</p>
            <p className="font-bold">{model.videosCount}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-500">Audios</p>
            <p className="font-bold">{model.audiosCount}</p>
          </div>
        </div>
      </div>
    </div>

  );
}
