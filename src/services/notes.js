import { db } from "./db";
import { 
  collection, 
  getDocs, 
  addDoc, 
  deleteDoc, 
  doc, 
  updateDoc, 
  query, 
  where, 
  orderBy, 
  getDoc, 
  serverTimestamp 
} from "firebase/firestore";

export const getNotesByUserId = async (userId) => {
  const notesRef = collection(db, "notes");
  const q = query(
    notesRef,
    where("userId", "==", userId)
  );
  const data = await getDocs(q);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const getNoteById = async (id) => {
  const noteDoc = doc(db, "notes", id);
  const noteSnap = await getDoc(noteDoc);

  if (noteSnap.exists()) {
    return { id: noteSnap.id, ...noteSnap.data() };
  } else {
    throw new Error("Note not found");
  }
};

export const addNote = async ({ title, content, userId }) => {
  const notesRef = collection(db, "notes");
  await addDoc(notesRef, {
    title,
    content,
    userId,
    createdAt: serverTimestamp()
  });
};

export const deleteNote = async (id) => {
  const noteDoc = doc(db, "notes", id);
  await deleteDoc(noteDoc);
};

export const updateNote = async (note) => {
  const noteDoc = doc(db, "notes", note.id)
  await updateDoc(noteDoc, {
    title: note.title,
    content: note.content,
    updatedAt: serverTimestamp(), 
  });
};