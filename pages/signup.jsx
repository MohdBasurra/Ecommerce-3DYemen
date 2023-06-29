import Image from "next/image";
import LoginVector from "@/images/signupVector.png";
import Link from "next/link";

const signup = () => {
  return (
    <>
      <div className="main bg-slate-300 w-screen h-screen flex items-center justify-center">
        <div className="card bg-custom-blue w-3/4 h-5/6 rounded-xl flex items-center justify-center">
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
          <div className="Login sm:w-1/2 w-full   h-full flex items-center justify-center">
            <section class="w-full  flex items-center justify-center">
              <div class=" h-full flex ">
                <div class="w-full flex h-5/6 bg-lightBlue rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Create a new account
                    </h1>
                    <form class="space-y-4 md:space-y-6">
                      <div>
                        <label
                          for="text"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          first name
                        </label>
                        <input
                          type="text"
                          name="text"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Ahmed"
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="text"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="text"
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
                          for="phone"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          phone number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="771234567"
                          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required=""
                        />
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
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            {" "}
                            confirm Password
                          </label>
                          <input
                            type="password"
                            name="password"
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
                        <Link href="/signup">
                          <a class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Login
                          </a>
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

export default signup;
