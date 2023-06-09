import { useState } from "react";
import crealityLogo from "../images/crealityLogo.png";
import Image from "next/image";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Imprima } from "next/font/google";
import {handleSignout,isLoggedin,useAuth} from '../firebase/LoginAuth';


const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "All Products", href: "/collection/all", current: false },
  { name: "3D printers", href: "/collection/all", current: false },
  { name: "Filaments", href: "/collection/all", current: false },
  { name: "Resin", href: "/collection/all", current: false },
  { name: "Part&Upgrades", href: "/collection/all", current: false },
  { name: "Offers", href: "/collection/all", current: false },
  { name: "Used_Machines", href: "#", current: false },
  { name: "Blogs", href: "/collection/all", current: false },
  { name: "FAQs", href: "/collection/all", current: false },
];
const navigationPhone = [
  { name: "Call us +967 738 074 693", href: "#", current: false },
  { name: "info@3Dyemen.com", href: "#", current: false },
];
const navigationPhoneFollowus = [
  { name: "Facebook", href: "#", current: false },
  { name: "Instagram", href: "#", current: false },
  { name: "WhatsApp", href: "#", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div class="pt-4 mx-auto ">
        <div class="container   mx-auto flex items-center justify-between ">
          {/* <!-- logo --> */}
          <div class="  md:w-48   ">
            <Image
              src={crealityLogo}
              alt="Creality Logo"
              width={280}
              height={250}
            />{" "}
          </div>

          {/* <!-- search --> */}
          <div className="flex justify-end items-end   mx-auto bg-gray-100">
            <div class="  rounded-md   xl:flex items-center justify-center hidden md:block  ">
              <input
                class="  bg-transparent font-semibold text-xl "
                type="text"
                placeholder="I'm searching for ..."
              />
              {/* Seacrch Icon */}
              <svg
                class="ml-auto h-5 px-4 text-gray-500"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                {" "}
                <path
                  fill="currentColor"
                  d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                ></path>
              </svg>
            </div>
          </div>

          {/* <!-- phone number --> */}

          {/* <!-- buttons --> */}
          <nav class="contents     flex-wrap">
            <ul class="ml-4 xl:w-48 flex items-center justify-end">
              <li class="ml-2 lg:ml-4 relative inline-block">
                <Link class="" href="">
                  <div class="absolute -top-1 right-0 z-10 bg-custom-blue text-xs font-bold px-1 py-0.5 rounded-sm">
                    3
                  </div>
                  <svg
                    class=" h-9 lg:h-10 p-2 text-gray-500"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="heart"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li class="ml-2 lg:ml-4 relative inline-block">
                <Link class="" href="/cart">
                  <div class="absolute -top-1 right-0 z-10 bg-custom-blue text-xs font-bold px-1 py-0.5 rounded-sm">
                    7
                  </div>
                  <svg
                    class="h-9 lg:h-10 p-2 text-gray-500"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="shopping-cart"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                    ></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          {/* <!-- cart count --> */}
          <div class="ml-4 hidden sm:flex flex-col font-bold">
            <span class="text-xs text-gray-400">Your Cart</span>
            <span>3 items</span>
          </div>
        </div>

        <Disclosure as="nav" className=" ">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-custom-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center"></div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex flex-wrap space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-custom-blue text-white"
                                : "text-black-900 hover:bg-custom-blue hover:text-white",
                              "rounded-md px-1  font-meduim text-xl"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  {!isLoggedin?(<button className="bg-custom-blue w-[6rem] p-2 rounded-xl"><Link href='/login'>Login</Link></button>):(<div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-12 w-12 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/profile"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                           
                          <Menu.Item>
                            {({ active }) => (
                              <div onClick={handleSignout} className={classNames(
                                active ? "bg-gray-100 text-red-600" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}>
                            
                                Sign out
                               </div>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>)}
                </div>
              </div>
              {/* Mobile phone */}
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-black-900 text-white"
                          : "text-black-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  <hr className="bg-red-900"></hr>
                  <div>
                    <h1 className="text-black-900">NEED HELP?</h1>
                  </div>
                  {navigationPhone.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-red-900 text-white"
                          : "text-black-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  <hr></hr>
                  <div>
                    <h1 className="text-black-900">FOLLOW US</h1>
                  </div>
                  {navigationPhoneFollowus.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-red-900 text-white"
                          : "text-black-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <hr></hr>
      </div>
    </>
  );
}

export default Header;
