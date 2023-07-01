import { createUserWithEmailAndPassword } from "firebase/auth";
import{auth} from './config'
export const Auth=()=>{


   
   
 }
 export const signIn = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      window.alert('User signed in successfully');
    } catch (error) {
      window.alert('Error signing in:', error);
    }}