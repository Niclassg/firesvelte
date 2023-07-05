import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import { writable } from 'svelte/store';

export const firebaseSdk = writable<{ auth: Auth; fireStore: Firestore }>();
