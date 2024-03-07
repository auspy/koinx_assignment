const FetchCoingecko = async ({ urlBase, query, endpoint }) => {
  try {
    const base = urlBase || "https://api.coingecko.com/api/v3";
    const params = query && new URLSearchParams(query);
    const res = await fetch(
      `${base}${endpoint}${params ? "?" + params.toString() : ""}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-cg-demo-api-key": process.env.COINGECKO_API_KEY,
        },
      }
    ).then((res) => res.json());
    return res;
  } catch (error) {
    console.error(error, "FetchCoingecko", endpoint);
  }
};

export default FetchCoingecko;
