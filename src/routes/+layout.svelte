<script lang="ts">
	import { db, auth } from './firebaseInit.js';
	import SvelteFlame from '$lib/SvelteFlame.svelte';
</script>
<!-- Wrap your app in SvelteFlame and you can use the components anywhere -->
<SvelteFlame {auth} fireStore={db}>
	<slot />
</SvelteFlame>
