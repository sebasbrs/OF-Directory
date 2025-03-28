export async function getTopModels() {
    try {
      const res = await fetch("https://onlyfans-api5.p.rapidapi.com/catalog/1/publish_date_desc", {
        method: 'GET',
        headers: {
          "x-rapidapi-key": process.env.RAPIDAPI_KEY!,
          "x-rapidapi-host": process.env.RAPIDAPI_HOST!,
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
        headers: {
            "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,
            "X-RapidAPI-Host": process.env.RAPIDAPI_HOST!,
        },
      });
      if (!res.ok) return null;
      return await res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  