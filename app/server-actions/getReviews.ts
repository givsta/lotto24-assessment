import { CommentsResponse } from '@/types/commentTypes';
import { handleError } from '@/utils/helpers';

export const getComments = async (): Promise<CommentsResponse> => {
    try {
        const throwsError = Math.random() < 0.5;
        const response = throwsError ? await fetch('https://dummyjson.com/http/500') : await fetch('https://dummyjson.com/comments?limit=4');

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('[getComments]: Comments not found.');
            } else if (response.status >= 500) {
                throw new Error('[getComments]: Internal server error.');
            } else {
                throw new Error(`[getComments]: Failed to fetch comments. Status code: ${response.status}`);
            }
        }

        return response.json();
    } catch (error) {
        handleError(error, 'getComments');
        
        return {
            comments: [],
            total: 0,
            skip: 0,
            limit: 0
        };
    }
}