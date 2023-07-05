import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import Router  from 'next/router'

export let isLoggedin =false;

export const handleLogin = async (e, email, password) => {
 
     e.preventDefault();
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Successfully logged in
    isLoggedin=true
    Router.push('/');    
    window.alert("Logged in as: " + userCredential.user.email);
  } catch (error) {
    isLoggedin=false

    // Handle errors here
   // window.alert("Error logging in: " + error.message);
  }
};

export const handleSignout = async () => {
    try {
      await auth.signOut();
      isLoggedin=false
      //window.alert("Logout it ");
      Router.push('/');
      // TODO: Handle successful sign-out
    } catch (error) {
      console.error("Error signing out: ", error);
      isLoggedin=true
      // TODO: Handle sign-out error
    }
  };