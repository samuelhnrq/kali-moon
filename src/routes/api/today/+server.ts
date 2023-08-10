// import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { fetchToday } from '$lib/server/pachang';

export const GET: RequestHandler = async () => {
	const today = await fetchToday();
	return new Response(today);
};
