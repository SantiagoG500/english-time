// export { Handle } from '@sveltejs/kit';
// export { onAuthStateChanged } from 'firebase/auth';
// import { isLoggedIn, user } from './lib/stores.js';
// import { Auth } from './lib/firebase.js';
// import { onAuthStateChanged } from 'firebase/auth';

// export const handle = async ({ event, resolve }) => {
// 	isLoggedIn.subscribe((data) => {
// 		console.log(`logged ${data}`);
// 		event.locals.isLoggedIn = data;
// 	});
// user.subscribe((data) => {
// 	console.log(`user ${data}`);
// 	event.locals.user = data;
// });
// event.locals.isLo}ggedIn = isLoggedIn.subscribe((data) => data);

// const res = resolve(event);

// if (event.url.pathname.startsWith('/course')) {
// console.log(event.locals);
// }

// return res;
// };
