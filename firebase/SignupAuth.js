import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { sendEmailVerification } from "firebase/auth";
import { auth, db } from "../firebase/config";

export const handleSubmit = async (event, user, setUser) => {
  event.preventDefault();
  try {
    // Create the user in Firebase Authentication
    const { user: authUser } = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );

    // Save the user information to the Firestore collection 'users'
    const userRef = doc(db, "users", authUser.uid);
    await setDoc(userRef, {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password,
    });

    // Send a verification email to the user
    await sendEmailVerification(auth.currentUser);

    // Reset the form and notify the user of success
    event.target.reset();
    alert(
      "User added successfully! Please check your email to verify your account."
    );
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Error adding user. Please try again." + error);
  }
};

export const handleChange = (event, setUser) => {
  event.preventDefault();
  const { name, value } = event.target;
  setUser((prevUser) => ({
    ...prevUser,
    [name]: value,
  }));
};