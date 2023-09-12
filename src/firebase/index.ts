import { initializeApp } from "firebase/app";
import firebaseConfig from "../config";

import {
  getDatabase,
  onValue,
  ref,
  set,
  update,
  remove,
} from "firebase/database";

export const app = initializeApp(firebaseConfig);
const db = getDatabase();

export function getValueDB<T>(path: string, callback: (value: T) => void) {
  const starCountRef = ref(db, path);

  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
}

export function setValueDB<T>(path: string, data: T) {
  return set(ref(db, path), data);
}

export function updateValueDB<T>(path: string, data: T) {
  return update(ref(db, path), data as object);
}

export function deleteValueDB(path: string) {
  return remove(ref(db, path));
}
