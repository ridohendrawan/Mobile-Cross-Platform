// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  doc,
  collection,
  getDocs,
  getFirestore,
  query,
  setDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes, getStorage } from "firebase/storage";
import { Memory } from "./context/memoryContext";

const firebaseConfig = {
  apiKey: "AIzaSyDS_GQBwZSXE2Dp4VY1bQzRC1ssiFbMZew",
  authDomain: "ionic-firebase-281c6.firebaseapp.com",
  projectId: "ionic-firebase-281c6",
  storageBucket: "ionic-firebase-281c6.appspot.com",
  messagingSenderId: "179138813651",
  appId: "1:179138813651:web:113714033c6c225f77fe26",
};


const app = initializeApp(firebaseConfig);
const firestore = () => getFirestore(app);

const storage = () => getStorage(app);

export const getMemories = async () => {
  const memories: Memory[] = [];

  try {
    const q = query(collection(firestore(), "memories"));
    const snapshots = await getDocs(q);
    snapshots.forEach((doc) => memories.push(doc.data() as Memory));
  } catch (err) {
    throw err;
  }

  return memories;
};
export const createMemory = async (
  newMenu: Memory,
  file: File
): Promise<Memory> => {
  try {
    await setDoc(doc(firestore(), "memories", newMenu.id), newMenu);
  } catch (err) {
    throw err;
  }

  return newMenu;
};
