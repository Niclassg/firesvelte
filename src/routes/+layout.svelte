<script lang="ts">
	import { db, auth } from './firebaseInit.js';
	import SvelteFlame from '$lib/SvelteFlame.svelte';
</script>

<SvelteFlame {auth} fireStore={db}>
	<slot />
</SvelteFlame>
