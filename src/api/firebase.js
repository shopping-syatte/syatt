import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, set, get, remove } from 'firebase/database';
import { v4 as uuid } from 'uuid';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_REACT_APP_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserSatedChange(callback) {
  return onAuthStateChanged(auth, async (user) => {
    // 1.사용자가 잇으면 (로그인한 경우)
    const updateUser = user ? await adminUser(user) : null;
    callback(updateUser);
  });
}


function adminUser(user) {
  // 2.사용자가 admin 에 등록이 되어 있는가
  // 3.{...user, isAdmin: true/false}
  return get(ref(database, 'admins'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

export async function addNewProduct(product, image) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    options: product.options.split(','),
  });
}

export async function getProducts() {
  return get(ref(database, 'products'))
    .then((snapshot) => {
        if (snapshot.exists()) {
          return Object.values(snapshot.val());
        }
        return []
      },
    );
}

export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`))
    .then(snapshot => {
      const items = snapshot.val() || {};
      return Object.values(items);
    })
}

export async function addOrUpdateToCart(userId, product) {
  return set(ref(database,`carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId, productId) {
  return remove(ref(database,`carts/${userId}/${productId}`));
}