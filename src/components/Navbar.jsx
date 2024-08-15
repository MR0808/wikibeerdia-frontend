import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import NavLinks from './NavLinks';

const Navbar = () => {
    const [scrollActive, setScrollActive] = useState(false);
    const [navbarShow, setNavbarShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollActive(window.scrollY > 100);
        });
    }, []);
    // className={`transition duration-500 fixed overflow-hidden z-20 w-full ${scrollActive && 'bg-neutral'}`}
    return (
        <div
            className={`fixed py-2 left-0 top-0 z-40 flex w-full items-center justify-center transition duration-500 ${
                scrollActive ? 'bg-neutral' : 'bg-transparent'
            }`}
        >
            <div className="relative mx-4 flex items-center justify-between">
                <div className="w-60 max-w-full px-4">
                    <NavLink to="/" className="navbar-logo block w-full py-5">
                        <img
                            src={logo}
                            alt="Wikibeerdia logo"
                            className="w-full"
                        />
                    </NavLink>
                </div>
                <div className="flex w-full items-center justify-between px-4">
                    <div>
                        <button
                            id="navbarToggler"
                            className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                            onClick={() => setNavbarShow(!navbarShow)}
                        >
                            <span className="relative my-[6px] block h-[2px] w-[30px] bg-white" />
                            <span className="relative my-[6px] block h-[2px] w-[30px] bg-white" />
                            <span className="relative my-[6px] block h-[2px] w-[30px] bg-white" />
                        </button>
                        <nav
                            id="navbarCollapse"
                            className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none xl:px-6 transition duration-300 ${
                                !navbarShow && 'hidden'
                            }`}
                        >
                            <ul className="block lg:flex 2xl:ml-20 uppercase">
                                <NavLinks />
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div className="flex items-center justify-end pr-16 lg:pr-0">
                            <div className="hidden sm:flex">
                                <NavLink
                                    to="/login"
                                    className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    to="/register"
                                    className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                                >
                                    Register
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
