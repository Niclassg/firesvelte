import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { env } from '$env/dynamic/public';


// const firebaseConfig: FirebaseOptions = {
// appId: "svelte-flame"
// };

export const app = initializeApp(
    {
      apiKey: env.PUBLIC_FIREBASE_API_KEY,
      authDomain: "svelte-flame.firebaseapp.com",
      projectId: "svelte-flame",
      storageBucket: "svelte-flame.appspot.com",
      messagingSenderId: "625528404416",
      appId: "1:625528404416:web:18e382c65b3a113c50f025"
    },
    'svelte-flame'
);

export const auth = getAuth(app);
export const db = getFirestore(app);

//Initialize for Prodexport const app = initializeApp(firebaseConfig);

// export const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);

/*
const firebaseConfig = {
  apiKey: "AIzaSyAKImusNGEM65hmT7BwDoT9NRswV2sw4ds",
  authDomain: "svelte-flame.firebaseapp.com",
  projectId: "svelte-flame",
  storageBucket: "svelte-flame.appspot.com",
  messagingSenderId: "625528404416",
  appId: "1:625528404416:web:54c37b2b9ed8618d50f025"
};
*/
