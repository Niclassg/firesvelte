<script lang="ts">
	import Document from '$lib/Components/Document.svelte';
	import { db, auth } from './firebaseInit.js';
	import FireSvelte from '$lib/FireSvelte.svelte';
</script>

<FireSvelte auth={auth} fireStore={db} >
	<h1>Welcome FireSveltet</h1>
	<p>This is just a page for testing the library</p>

	<Document ref="message/test" initial={{name: "test"}} let:data={messages}>
		{#if messages !== null}
			<p>Document data: {JSON.stringify(messages)}</p>
		{:else}
			<p>Loading...</p>
		{/if}
	</Document>

</FireSvelte>

