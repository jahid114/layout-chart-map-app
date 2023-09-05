import { dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const countryRes = await fetch('https://restcountries.com/v3.1/all');
	const countryData = await countryRes.json();
	return {
		countries: countryData
	};
}
