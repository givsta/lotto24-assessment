import { User } from './userTypes';

export interface Comment {
	id: number;
	body: string;
	postId: number;
	likes: number;
	user: User;
}

export interface CommentsResponse {
	comments: Comment[];
	total: number;
	skip: number;
	limit: number;
}