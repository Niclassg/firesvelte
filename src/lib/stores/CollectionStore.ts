import { BROWSER } from 'esm-env';
import { onSnapshot, CollectionReference, Query, collection } from 'firebase/firestore';

import { writable } from 'svelte/store';

type collectionStoreProps<T> = {
	firestore: ReturnType<typeof import('firebase/firestore').getFirestore>;
	ref: CollectionReference | string | Query;
	initial?: T[];
};

export const collectionStore = <T>(props: collectionStoreProps<T>) => {
	const { firestore, ref, initial } = props;
	let unsubscribe: () => void;

	//Early out if not in browser
	if (!BROWSER) {
		const store = writable<T[] | null>(props.initial);
		return {
			subscribe: store.subscribe,
			ref: null
		};
	}

	const colRef = typeof ref === 'string' ? collection(firestore, ref) : ref;

	const collectionStore = writable<T[] | null>(initial, (set) => {
		unsubscribe = onSnapshot(colRef, (snapshot) => {
			const data = snapshot.docs.map((doc) => {
				return { id: doc.id, ref: doc.ref, ...doc.data() } as T;
			});
			set(data);
		});
		return () => unsubscribe();
	});

	return {
		subscribe: collectionStore.subscribe,
		ref: colRef
	};
};
