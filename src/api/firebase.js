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

export async function onUserSatedChange(callback) {
  return onAuthStateChanged(auth, async (user) => {
    // 1.사용자가 잇으면 (로그인한 경우)
    const updateUser = user ? await adminUser(user) : null;
    callback(updateUser);
  });
}

async function adminUser(user) {
  // 2.사용자가 admin 에 등록이 되어 있는가
  // 3.{...user, isAdmin: true/false}
  return await get(ref(database, 'admins'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

// 새로운 제품 입력
export async function addNewProduct(product, image) {
  const id = uuid();
  return await set(ref(database, `products/${id}`), {
    ...product,
    id,
    title: product.title,
    price: parseInt(product.price),
    image,
    detailImage: product.detailImage,
    section: product.section,
    category: product.category,
    vimeoId: product.vimeoId,
  });
}

// 제품 리스트
export async function getProducts() {
  return await get(ref(database, 'products'))
    .then((snapshot) => {
        if (snapshot.exists()) {
          return Object.values(snapshot.val());
        }
        return [];
      },
    );
}

// cart API
export async function getCart(userId) {
  return await get(ref(database, `carts/${userId}`))
    .then(snapshot => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}
export async function addOrUpdateToCart(userId, product) {
  return await set(ref(database, `carts/${userId}/${product.id}`), product);
}
export async function removeFromCart(userId, productId) {
  return await remove(ref(database, `carts/${userId}/${productId}`));
}

// 강의 내역 API
export async function getPayment(userId) {
  return await get(ref(database, `payments/${userId}`))
    .then(snapshot => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}

export async function addOrUpdateToPayment(userId, product) {
  return await set(ref(database, `payments/${userId}/${product.id}`), product);
}

export async function removeFromPayment(userId, productId) {
  return await remove(ref(database, `payments/${userId}/${productId}`));
}

// 구매 내역 API
export async function getOrderList(userId) {
  return await get(ref(database, `orderLists/${userId}`))
    .then(snapshot => {
      const items = snapshot.val() || {};
      // console.log(items);
      return Object.values(items);
    });
}

export async function addOrUpdateToOrderList(userId, product) {
  return await set(ref(database, `orderLists/${userId}/${product.id}`), product);
}

export async function removeFromOrderList(userId, productId) {
  return await remove(ref(database, `payments/${userId}/${productId}`));
}