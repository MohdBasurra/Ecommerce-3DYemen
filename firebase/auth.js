import { signInWithEmailAndPassword } from "firebase/auth";
import{auth} from './config'
export const Auth=()=>{


   
   
 }
 export const signIn = async (email, password,event) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      event.preventDefault();

     window.alert('User signed in successfully');
    } catch (error) {
        event.preventDefault();
     window.alert('Error signing in:', error);
    }}