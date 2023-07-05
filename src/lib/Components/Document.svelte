<script lang="ts">
	//This component allows you to access the document store from any component in the slot
	type T = $$Generic;

	import type { DocumentReference, Firestore } from 'firebase/firestore';
	import { documentStore } from '../stores/DocumentStore.js';
	import { firebaseSdk } from '../stores/FireSvelteStore.js';

	interface $$Slots {
		default: {
			data: T | null;
			ref: typeof store.ref;
		};
		loading: {};
	}

	export let ref: string | DocumentReference;
	export let initial: T;
	let firestore: Firestore = $firebaseSdk.fireStore;

	let store = documentStore({
		firestore,
		ref,
		initial
	});
</script>

{#if $store !== undefined}
	<slot data={$store} ref={store.ref} />
{:else}
	<slot name="loading" />
{/if}
