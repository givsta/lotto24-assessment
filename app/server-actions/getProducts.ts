export const getProducts = async () => {
    const response = await fetch('https://dummyjson.com/products?limit=4');
    return response.json();
}