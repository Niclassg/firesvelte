# SvelteFlame

[![Vitest CI](https://github.com/Niclassg/svelte-flame/actions/workflows/vitest.yml/badge.svg?branch=main)](https://github.com/Niclassg/svelte-flame/actions/workflows/vitest.yml)

![npm](https://img.shields.io/npm/dw/svelte-flame) ![npm](https://img.shields.io/npm/v/svelte-flame)
![GitHub Repo stars](https://img.shields.io/github/stars/Niclassg/svelte-flame)
![npm type definitions](https://img.shields.io/npm/types/svelte-flame)

An easy to use Firebase library for SvelteKit.

Inspired by [SvelteFire](https://github.com/codediodeio/sveltefire).

## Features

- [x] Authentication
- [x] Firestore
- [ ] Storage _coming_
- [ ] Realtime Database _coming_

## Example

There is a demo repo [here](https://github.com/Niclassg/svelte-flame-example)


## Usage

### Install

```npm
npm i svelte-flame
```

### Setup Firebase

```javascript
// ./firebaseInit.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	// Your firebase config
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
```

### Wrap your app with SvelteFlame in your root layout

```html
<!-- ./src/routes/+layout.svelte -->
<script lang="ts">
	import { db, auth } from './firebaseInit.js';
	import { SvelteFlame } from 'svelte-flame';
</script>

<SvelteFlame {auth} fireStore="{db}">
	<slot />
	<!-- Your app -->
</SvelteFlame>
```

### Use in your components

```html
<script lang="ts">
	import { Document } from 'svelte-flame';
</script>

<Document ref="messages/message" " let:data="{message}">
	{#if message !== null}
	<p>Document data: {message?.from}: {message?.text}</p>
	{/if}
</Document>
```
