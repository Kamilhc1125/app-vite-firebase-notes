import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '@/config/firebase';

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error(error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    console.log('User logged out');
  } catch (error) {
    console.error(error);
  }
};

export { auth, signInWithGoogle, logout }
