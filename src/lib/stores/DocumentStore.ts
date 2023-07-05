import { BROWSER } from 'esm-env';
import { type DocumentReference, doc, onSnapshot } from 'firebase/firestore';

import { writable } from 'svelte/store';

type docStoreProps<T> = {
	firestore: ReturnType<typeof import('firebase/firestore').getFirestore>;
	ref: DocumentReference | string;
	initial?: T;
};

export const documentStore = <T>(props: docStoreProps<T>) => {
	const { firestore, ref, initial } = props;
	let unsubscribe: () => void;

	//Early out if not in browser
	if (!BROWSER) {
		const store = writable<T | null>(props.initial);
		return {
			subscribe: store.subscribe,
			ref: null,
			id: ``
		};
	}

	const docRef = typeof ref === 'string' ? doc(firestore, ref) : ref;

	const docStore = writable<T | null>(initial, (set) => {
		unsubscribe = onSnapshot(docRef, (doc) => {
			set((doc.data() as T) ?? null);
		});
		return () => unsubscribe();
	});

	return {
		subscribe: docStore.subscribe,
		ref: docRef,
		id: docRef.id
	};
};
