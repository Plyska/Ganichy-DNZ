import { initializeApp } from "firebase/app";

import {
  getDatabase,
  onValue,
  ref,
  set,
  update,
  remove,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC4Qtf7bjyRCbeqSQkffoAfiaeMOh6Vulg",
  authDomain: "ganichydnz.firebaseapp.com",
  databaseURL:
    "https://ganichydnz-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ganichydnz",
  storageBucket: "ganichydnz.appspot.com",
  messagingSenderId: "1011998552148",
  appId: "1:1011998552148:web:c0eea23f9f368ae795fdc1",
};

export const app = initializeApp(firebaseConfig);

export function getValueDB<T>(path: string, callback: (value: T) => void) {
  const db = getDatabase();
  const starCountRef = ref(db, path);

  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    callback(data); //console.log
  });

  // return new Promise((res, reg) => {
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     res(data);
  //   });
  // })
}

export function setValueDB(path: string, data: any) {
  const db = getDatabase();
  set(ref(db, path), data);
}

export function updateValueDB(path: string, data: any) {
  const db = getDatabase();
  update(ref(db, path), data);
}

export function deleteValueDB(path: string) {
  const db = getDatabase();
  remove(ref(db, path));
}

// const withLoading =
//   (callback: any) =>
//   (...args: any) =>{console.log('call')
//     return Promise.resolve(callback(...args)).then((res) => {
//       console.log(res)
//       return {      isLoading: true,
//       res,}
//     })};

// export const getValue = withLoading(getValueDB)
