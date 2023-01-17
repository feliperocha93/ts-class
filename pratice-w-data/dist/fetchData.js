async function fetchData(url) {
    try {
        const res = await fetch(url);
        if (!res.ok)
            throw new Error('Erro: ' + res.status);
        return await res.json();
    }
    catch (error) {
        if (error instanceof Error)
            console.error("fetchData: " + error.message);
        return null;
    }
}
export { fetchData };
//# sourceMappingURL=fetchData.js.map