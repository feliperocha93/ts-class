const fetchData = async <T>(url: string): Promise<T | null> => {
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error('Erro: ' + res.status);

    return await res.json();
  } catch (error) {
    if (error instanceof Error) console.error("fetchData: " + error.message)
    return null;
  }
}

export { fetchData }