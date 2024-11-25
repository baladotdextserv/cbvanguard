const base_url = process.env.BASE_URL;
console.log(base_url);
export async function getAllHsCode(): Promise<any[]> {
  try {
    const response = await fetch(`https://localhost:7183/api/FocusApi`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: any[] = await response.json();
    return data;
  } catch (error) {
    console.error("There was an error!", error);
    return [];
  }
}
