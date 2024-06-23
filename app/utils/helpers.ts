export const handleError = (error: unknown, context: string) => {
	if (error instanceof Error) {
			console.error(`Error in ${context}:`, error.message);
	} else {
			console.error(`Non-Error object caught in ${context}:`, error);
	}
};