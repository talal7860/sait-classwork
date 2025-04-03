import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const getSessionId = (cookieStr) => {
  const cookies = {}
  cookieStr?.split(';')?.forEach((cookie) => {
    const [name, value] = cookie.trim().split('=');
    cookies[name] = decodeURIComponent(value)
  });
  return cookies.session
}

export const getSessionData = async (cookies) => {
  const sessionId = getSessionId(cookies);
  if (!sessionId) {
    return undefined;
  }
   const docRef = doc(db, "sessions", sessionId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {...docSnap.data(), id: doc.id};
    }
}

export const deleteSessionData = async (cookies) => {
  const sessionId = getSessionId(cookies);
  if (!sessionId) {
    return undefined;
  }
  const docRef = doc(db, "sessions", sessionId);
  return deleteDoc(docRef);
}
