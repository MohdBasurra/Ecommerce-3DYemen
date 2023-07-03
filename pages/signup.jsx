import Image from "next/image";
import LoginVector from "@/images/signupVector.png";
import Link from "next/link";
import { db } from "../firebase/config";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/config";

const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  async function handleSubmit(event) {
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
  }

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="main bg-slate-300 w-full sm:h-screen h-full flex items-center justify-center">
        <div className="card overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 sm:bg-custom-blue pt bg-slate-300 w-3/4 sm:h-5/6 h-full rounded-xl flex items-center justify-center">
          <div className="Ads w-1/2 h-full rounded-l-xl hidden lg:block bg-lightBlue">
            <div className="   flex-col flex sm:justify-center sm:items-center h-full ">
              <Image
                src={LoginVector}
                alt="Example Image"
                width={500}
                height={500}
              />{" "}
              <h1 className="p-8 text-2xl font-semibold">
                join now for exclusive benefits and a better experience.
              </h1>
            </div>
          </div>
          <div className="Login sm:w-1/2 w-sceen   h-full flex items-center justify-center">
            <section class="w-full  flex items-center justify-center">
              <div class=" h-full   flex pt-2 justify-center  ">
                <div class="sm:w-full w-screen flex h-5/6 items-center justify-center  bg-lightBlue rounded-lg shadow dark:border md:mt-0">
                  <div class="  p-8 ">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Create a new account
                    </h1>
                    <form
                      class="space-y-4 md:space-y-6"
                      onSubmit={handleSubmit}
                    >
                      <div>
                        <label
                          for="firstName"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          first name
                        </label>
                        <input
                          onChange={handleChange}
                          type="text"
                          name="firstName"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Ahmed"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="lastName"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Last name
                        </label>
                        <input
                          onChange={handleChange}
                          type="text"
                          name="lastName"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Ali"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your email
                        </label>
                        <input
                          onChange={handleChange}
                          type="email"
                          name="email"
                          id="email"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="name@company.com"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="phoneNumber"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          phone number
                        </label>
                        <input
                          onChange={handleChange}
                          type="tel"
                          name="phoneNumber"
                          id="phone"
                          placeholder="771234567"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required=""
                        />
                         <label className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">Government</label>
      <select
     //   value={selectedGovernment}
        //onChange={handleGovernmentChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      >
        <option value="" disabled>Select a government</option>
        <option value="Sana'a">Sanaa</option>
        <option value="Hadhramout">Hadhramout</option>
        <option value="Shabwa">Shabwa</option>
        <option value="Aden">Aden</option>
        <option value="Taiz">Taiz</option>
      </select>

                      </div>
                      <div className="flex sm:flex-row flex-col">
                        <div className="sm:pr-8">
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Password
                          </label>
                          <input
                            onChange={handleChange}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                          />
                        </div>
                        <div>
                          <label
                            for="confirmPassword"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            confirm Password
                          </label>
                          <input
                            onChange={handleChange}
                            type="password"
                            name="confirmPassword"
                            id="password"
                            placeholder="••••••••"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            required=""
                          />
                        </div>
                      </div>
                      <div class="flex items-center justify-between">
                        <div class="flex items-start"></div>
                      </div>
                      <button
                        type="submit"
                        class="w-full text-black bg-custom-blue hover:bg-blue-500 focus:ring-4   focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Sign in
                      </button>
                      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Do you have an account?{" "}
                        <Link
                          href="/signup"
                          class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Login
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
