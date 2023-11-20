import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  let navigate = useNavigate();
  const logout = () => {


    localStorage.clear();
    navigate("/login", { replace: true });
  }
  return (
    <>
      <div
        className="ud-header fixed top-0 left-0 z-40 flex w-full items-center bg-[#002145]"
        id="navbar"
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <Link to="/" className="navbar-logo block w-full py-5">
                <img
                  src="/assets/images/logo/logo.png"
                  alt="logo"
                  className="header-logo w-full pl-20 pr-3"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  id="navbarToggler"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                  onClick={toggleMobileMenu}
                >
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                  <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                </button>
                <h1 className="mb-0 text-xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug md:leading-snug mb-5 mr-5 ml-5">
                  {" "}
                  SUST HCI AI & Blockchain Research Lab (HAB)
                </h1>
                <div
                  className={`${isMobileMenuOpen
                    ? "block text-white text-center"
                    : "hidden md:hidden"
                    } absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-[#002145] pt-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:pr-4 lg:shadow-none xl:pr-6`}
                >
                  <ul className="blcok lg:flex  ">
                    <li className="group relative">
                      <Link
                        to="/"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                      >
                        Home
                      </Link>
                    </li>

                    <li className="group relative">
                      <Link to="/people"

                        className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        People
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link to='/project'
                        href="#contact"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        Projects
                      </Link>
                    </li>




                    <li className="group relative">
                      <Link
                        to="/publications"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        Publications
                      </Link>
                    </li>


                    <li className="group relative">
                      <Link
                        to="/research-area"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        Research Area
                      </Link>
                    </li>



                    <li className="group relative">
                      <Link
                        to="/about"
                        activeClassName="text-blue-300"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                      >
                        About
                      </Link>
                    </li>



                    <li className="group relative">
                      <Link
                        to="/contact"
                        activeClassName="text-blue-300"
                        className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12  "
                      >
                        Contact
                      </Link>
                    </li>
                    {((localStorage.getItem("username"))) ?
                      (<>
                        <li className="group relative">
                          <Link
                            to="/userProfile"
                            activeClassName="text-blue-300"
                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12  "
                          >
                            Profile
                          </Link>
                        </li>
                        <li className="group relative">
                          <Link
                            to="/AddPublication"
                            activeClassName="text-blue-300"
                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12  "
                          >
                            Add Publication
                          </Link>
                        </li>
                        <li className="group relative">
                          <button

                            onClick={logout}

                            className="text-blue-300 ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12  "
                          >
                            Log Out
                          </button>
                        </li>
                      </>) : <>
                        <li className="group relative">
                          <Link
                            to="/login"
                            activeClassName="text-blue-300"
                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12  "
                          >
                            Sign In
                          </Link>
                        </li>
                        <li className="group relative">
                          <Link
                            to="/signup"
                            activeClassName="text-blue-300"
                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12  "
                          >
                            Sign Up
                          </Link>
                        </li></>
                    }

                  </ul>



                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
