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

export function setValueDB(path: string, data: any) {
  return set(ref(db, path), data);
}

export function updateValueDB(path: string, data: any) {
  return update(ref(db, path), data);
}

export function deleteValueDB(path: string) {
  return remove(ref(db, path));
}
