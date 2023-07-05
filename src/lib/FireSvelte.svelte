<script lang="ts">
	import type { Auth } from 'firebase/auth';
	import type { Firestore } from 'firebase/firestore';
	import { firebaseSdk } from './stores/FireSvelteStore.js';

	//All components in the slot component will have access to the firebaseSdk store
	export let auth: Auth;
	export let fireStore: Firestore;

	firebaseSdk.set({ auth, fireStore });
</script>

<slot />
