import { ProductsResponse } from '@/types/productTypes'
import { handleError } from '@/utils/helpers';

export const getProducts = async (): Promise<ProductsResponse> => {
    
    try {
        const response = await fetch('https://dummyjson.com/products?limit=4');
    
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('[getProducts]: Products not found.');
            } else if (response.status >= 500) {
                throw new Error('[getProducts]: Internal server error.');
            } else {
                throw new Error(`[getProducts]: Failed to fetch products. Status code: ${response.status}`);
            }
        }
    
        return response.json();
    } catch (error) {
        handleError(error, 'getProducts');

        return {
            products: [],
            total: 0,
            skip: 0,
            limit: 0
        };
    }
}