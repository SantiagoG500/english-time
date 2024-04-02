export function load({ setHeaders }) {
	setHeaders({
		'Cross-Origin-Embedder-Policy': 'unsafe-none'
	});
}
// import { Auth } from '../../lib/firebase.js';

// const PROVIDERS = ['google'];

// export const actions = {
// 	login: async ({ request, local, url }) => {
// 		// const provider = url.searchParams.get('provider');

// 		// if (PROVIDERS.includes(provider)) {
// 		// 	const user = Auth.logIn();
// 		// 	console.log(user);
// 		// }
// 	}
// };
