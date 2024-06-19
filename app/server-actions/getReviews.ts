export const getComments = async () => {
    const throwsError = Math.random() < 0.5;
    const response = throwsError ? await fetch('https://dummyjson.com/http/500') : await fetch('https://dummyjson.com/comments?limit=4');

    return response.json();
}