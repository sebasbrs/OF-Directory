export async function getTopModels(page: number) {
    try {
      const res = await fetch(`https://onlyfans-api5.p.rapidapi.com/catalog/${page}/publish_date_desc` , {
        method: 'GET',
        headers: {
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
          "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST!,
        },
        
      });
      if (!res.ok) throw new Error("Error al obtener modelos");
      return await res.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  
  export async function getModelProfile(username: string) {
    try {
      const res = await fetch(`https://onlyfans-api5.p.rapidapi.com/users/${username}`, {
        method: 'GET',
        headers: {
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
          "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST!,
        },
      });
      if (!res.ok) return null;
      return await res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  export async function getModelPosts(modelId: number) {
    try {
      const res = await fetch(`https://onlyfans-api5.p.rapidapi.com/posts/${modelId}/10/publish_date_desc`, {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY!,
          "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST!,
        },
      });
  
      if (!res.ok) throw new Error("Error al obtener posts del modelo");
  
      return await res.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  