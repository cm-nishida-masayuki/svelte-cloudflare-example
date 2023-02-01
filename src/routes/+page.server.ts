import type { Todo } from '$lib/types';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ platform }) => {
	const res = await platform?.env?.TODO_LIST.prepare(
		'SELECT * FROM Todos ORDER BY created'
	).all<Todo>();

	const data = res?.results ?? [];

	return {
		todoList: data
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request, platform }) => {
		const data = await request.formData();

		await platform?.env?.TODO_LIST.prepare('INSERT INTO Todos (title, status) VALUES(?, ?)')
			.bind(data.get('title'), 'new')
			.run();
	}
};
