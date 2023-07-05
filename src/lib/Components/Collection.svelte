<script lang="ts" generics="T">
	//This component allows you to access the document store from any component in the slot

	import type { CollectionReference, DocumentReference, Firestore, Query } from 'firebase/firestore';
	import { collectionStore } from '../stores/CollectionStore.js';
	import { firebaseSdk } from '../stores/SvelteFlameStore.js';

	interface $$Slots {
		default: {
			data: T[] | null;
			ref: typeof store.ref;
		};
		loading: {};
	}

	export let ref: CollectionReference | string | Query;
	export let initial: T[] = [];
	let firestore: Firestore = $firebaseSdk.fireStore;

	let store = collectionStore<T>({
		firestore,
		ref,
		initial
	});
</script>

{#if initial?.length > 0 || $store != null}
	<slot data={$store} ref={store.ref} />
{:else}
	<slot name="loading" />
{/if}
