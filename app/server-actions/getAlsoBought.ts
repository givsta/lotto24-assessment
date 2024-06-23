import { handleError } from '@/utils/helpers';
import { ProductsResponse } from '@/types/productTypes';

export const getAlsoBought = async (): Promise<ProductsResponse> => {
    
    try{
        const isSlow = Math.random() < 0.5; // <- This is wanted to mimic a slow response
        const response = await fetch(`https://dummyjson.com/products?limit=8&delay=${isSlow ? 5000 : 0}`);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('[getAlsoBought]: Also bought products not found.');
            } else if (response.status >= 500) {
                throw new Error('[getAlsoBought]: Internal server error.');
            } else {
                throw new Error(`[getAlsoBought]: Failed to fetch products. Status code: ${response.status}`);
            }
        }

        return response.json();
    } catch (error) {
        handleError(error, 'getAlsoBought');

        return {
            products: [],
            total: 0,
            skip: 0,
            limit: 0
        };
    }
}