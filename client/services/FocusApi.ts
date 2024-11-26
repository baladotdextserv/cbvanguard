const base_url = process.env.NEXT_PUBLIC_BASE_URL;
export async function getAllHsCode(): Promise<any[]> {
  try {
    const response = await fetch(`${base_url}/FocusApi`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: any[] = await response.json();
    return data;
  } catch (err) {
    console.error("There was an error!", err);
    return [];
  }
}
