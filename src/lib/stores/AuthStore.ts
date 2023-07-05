import { BROWSER } from 'esm-env';
import type { Auth, User } from 'firebase/auth';

import { writable } from 'svelte/store';

type authStoreProps = {
	auth: Auth;
};

export const authStore = (props: authStoreProps) => {
	const { auth } = props;
	let unsubscribe: () => void;

	//Early out if not in browser
	if (!BROWSER) {
		const store = writable<User | null>(null);
		return {
			subscribe: store.subscribe
		};
	}

	const authStore = writable<User | null>(auth?.currentUser, (set) => {
		unsubscribe = auth.onAuthStateChanged((user) => {
			set(user);
		});
		return () => unsubscribe();
	});

	return {
		subscribe: authStore.subscribe
	};
};
