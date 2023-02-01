import type { RequestHandler } from '../$types';

type RequestBody = {
	newStatus: string;
};

export const PUT = (async ({ params, platform, request }) => {
	const { id } = params;
	const requestBody = await request.json<RequestBody>();

	await platform?.env?.TODO_LIST.prepare('UPDATE todos SET status = ? WHERE id = ?')
		.bind(requestBody.newStatus === 'done' ? 'done' : 'new', id)
		.run();

	return new Response(JSON.stringify({ status: 'OK' }));
}) satisfies RequestHandler;
