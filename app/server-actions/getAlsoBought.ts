export const getAlsoBought = async () => {
    const isSlow = Math.random() < 0.5; // <- This is wanted to mimic a slow response
    const response = await fetch(`https://dummyjson.com/products?limit=8&delay=${isSlow ? 5000 : 0}`);
    return response.json();
}