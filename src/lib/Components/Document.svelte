<script lang="ts" generics="T">
	//This component allows you to access the document store from any component in the slot

	import type { DocumentReference, Firestore } from 'firebase/firestore';
	import { documentStore } from '$lib/stores/DocumentStore.js';
	import { firebaseSdk } from '$lib/stores/SvelteFlameStore.js';

	interface $$Slots {
		default: {
			data: T | undefined | null;
			ref: typeof store.ref;
		};
		loading: {};
	}

	export let ref: string | DocumentReference;
	export let initial: T | undefined = undefined;
	let firestore: Firestore = $firebaseSdk.fireStore;

	let store = documentStore<T>({
		firestore,
		ref,
		initial
	});
</script>

{#if $store != null}
	<slot data={$store} ref={store.ref} />
{:else}
	<slot name="loading" />
{/if}
