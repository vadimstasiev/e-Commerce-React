import React, {useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Popover, Transition, Menu } from '@headlessui/react'
import { Toggle } from "../ThemeToggle";
import { logout } from "../../firebase";
import { useNavigate } from "react-router-dom";


const ProfileIconMenu = props => {
  const { children, customClass } = props 
  const [user, loadingUser, error] = useAuthState(auth);
  const navigate = useNavigate()

  return (
    <Menu>
          {({ open }) => (
            <>
              <Menu.Button>
                <div>{children}</div>
              </Menu.Button>
              <Transition
                show={open}
                enter="transition ease-out duration-500"
                enterFrom=" opacity-0 "
                enterTo=" opacity-100 "
                leave="transition ease-in duration-500"
                leaveFrom=" opacity-100 "
                leaveTo=" opacity-0 "
              >
                <div className="static">
                {user?
                  <Menu.Items
                    static
                    className="absolute right-0 w-52 mt-4 origin-top-right origin-top-right bg-gray-300 dark:bg-gray-900 border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm leading-5 text-gray-900 dark:text-gray-200">Signed in as</p>
                      <p className="text-sm font-medium leading-5 text-gray-900 dark:text-gray-200 truncate">
                        tom@example.com
                      </p>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#account-settings"
                            className={`${
                              active
                                ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                                : "text-gray-700 dark:text-gray-100"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={`${
                              active
                              ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                              : "text-gray-700 dark:text-gray-100"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            onClick={() => navigate('/SignOut')}
                          >
                            Sign out
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                  :
                  <Menu.Items
                    static
                    className="absolute right-0 w-40 mt-4 origin-top-right origin-top-right bg-gray-300 dark:bg-gray-900 border border-gray-200  divide-gray-100 rounded-md shadow-lg outline-none"
                  >
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={`${
                              active
                              ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                              : "text-gray-700 dark:text-gray-100"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            onClick={() => navigate('/SignIn')}
                          >
                            Sign In
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            className={`${
                              active
                              ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                              : "text-gray-700 dark:text-gray-100"
                            } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                            onClick={() => navigate('/SignUp')}
                          >
                            Sign Up
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                }
                </div>
              </Transition>
            </>
          )}
        </Menu>
  )
}

const Header = () => {

  const [isActive, setIsActive] = useState(false);


  const activeSide = "bg-gray-300 dark:bg-gray-900 h-screen w-80 transform transition-all fixed duration-700 text-white flex justify-center p-2"
  const hiddenSide = "bg-gray-300 dark:bg-gray-900 h-screen w-80 transform transition-all fixed duration-700 text-white flex justify-center p-2 -translate-x-80"
  const activeButton = "cursor-pointer transition-all transform duration-700 flex items-center justify-center"
  const normalButton = "fixed cursor-pointer transition-all transform duration-700 flex items-center justify-center translate-x-0"

    return (
      <header>
        <nav id="header" className="w-full z-30 top-0 py-2">
          <div className="flex transform fixed transition-all duration-1000 md:hidden">
            <div className={isActive ? activeSide:hiddenSide}>
              <ul className="md:flex text-base text-gray-700 pt-4 pt-14">
                <li><a className="inline-block no-underline font-medium dark:text-gray-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4" href="#">FAQ</a></li>
                <li><a className="inline-block no-underline font-medium dark:text-gray-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4" href="#">About</a></li>
              </ul>
            </div>
          </div>
          <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">     
            <div className="md:hidden">       
              <div className={isActive ? normalButton : activeButton}
              onClick={() =>setIsActive(!isActive)}>
                  <label htmlFor="menu-toggle" className="cursor-pointer block">
                    <svg className="fill-current text-gray-900 dark:text-gray-200 hover:text-black dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                      <title>menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                  </label>
              </div>
              <input className="hidden" type="checkbox" id="menu-toggle" />
            </div>
            <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
              <nav>
                <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                  <li><a className="inline-block no-underline font-medium dark:text-gray-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4" href="#">FAQ</a></li>
                  <li><a className="inline-block no-underline font-medium dark:text-gray-200 dark:hover:text-white hover:underline dark:hover:no-underline py-2 px-4" href="#">About</a></li>
                </ul>
              </nav>
            </div>
            <div className="order-1 md:order-2">
              <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-xl text-gray-800 dark:text-gray-100 hover:text-black dark:hover:text-white" href="#">
                <svg className="fill-current mr-2 text-gray-800 dark:text-gray-100 dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z" />
                </svg>
                ArchiveCom
              </a>
            </div>
            <div className="relative order-2 md:order-3 flex items-center" id="nav-content">
              <ProfileIconMenu customClass="pt-0.5 inline-block" >
                <svg className="fill-current dark:text-gray-200 hover:text-black dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <circle fill="none" cx="12" cy="7" r="3" />
                  <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                </svg>
              </ProfileIconMenu>
              <a className="pl-3 inline-block" href="#">
                <svg className="fill-current dark:text-gray-200 hover:text-black dark:hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                  <circle cx="10.5" cy="18.5" r="1.5" />
                  <circle cx="17.5" cy="18.5" r="1.5" />
                </svg>
              </a>
              <a className="inline-block pl-2" href="#">
                <Toggle className="text-black dark:text-gray-200 dark:hover:text-white text-lg"/>
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
}
export default Header;