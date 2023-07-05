<script lang="ts">
	import Collection from '$lib/Components/Collection.svelte';
	import Document from '$lib/Components/Document.svelte';

	type message = {
		from: string;
		text: string;
	};

	const initialDoc: message = {
		from: 'Marc',
		text: 'World'
	};

	const initialCol: message[] = [];
</script>

<Document ref="messages/message" initial={initialDoc} let:data={message}>
	{#if message !== null}
		<p>Document data: {message?.from}: {message?.text}</p>
	{/if}
</Document>

<Collection ref="messages" initial={initialCol} let:data={messages}>
	{#if messages !== null}
		<ul>
			{#each messages as message}
				<li>{message.from}: {message.text}</li>
			{/each}
		</ul>
	{/if}
</Collection>
