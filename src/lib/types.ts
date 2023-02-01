export interface Todo {
	id: number;
	name: string;
	title: string;
	createdAt: number;
	status: 'new' | 'done';
}

export type TodoList = Todo[];
