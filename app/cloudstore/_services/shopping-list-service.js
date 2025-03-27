import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  doc,
  getDoc,
} from "firebase/firestore";

const addItem = async (item) => {
  try {
    const docRef = await addDoc(collection(db, "shoppingList"), item);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
const getItem = async (id) => {
  const docRef = doc(db, "shoppingList", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
};

const getItems = async () => {
  const q = query(collection(db, "shoppingList"));
  const querySnapshot = await getDocs(q);
  const items = [];
  querySnapshot.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });
  return items;
};

export { addItem, getItems, getItem };
