import React from 'react';
import { Link } from 'react-router-dom';

function NavigatrionUL( ) {
    return (
       <>
       
       
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
                    <Link to = "/people"
                  
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                    >
                      People
                    </Link>
                  </li>
                  <li className="group relative">
                    <Link to= '/project'
                      href="#contact"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                    >
                      Projects
                    </Link>
                  </li>
                  {/* <li className="submenu-item group relative">
                    <a
                      href="javascript:void(0)"
                      className="relative mx-8 flex py-2 text-base text-dark after:absolute after:right-1 after:top-1/2 after:mt-[-2px] after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-current group-hover:text-primary lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:after:right-0 lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                    >
                      Publications
                    </a>
                    <div
                      className="submenu relative top-full left-0 hidden w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full"
                    >
                      <a
                        href="about.html"
                        className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                      >
                        About Page
                      </a>
                      <a
                        href="pricing.html"
                        className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                      >
                        Pricing Page
                      </a>
                      <a
                        href="contact.html"
                        className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                      >
                        Contact Page
                      </a>
                      <a
                        href="blog-grids.html"
                        className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                      >
                        Blog Grid Page
                      </a>
                      <a
                        href="blog-details.html"
                        className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                      >
                        Blog Details Page
                      </a>
                      <a
                        href="signup.html"
                        className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                      >
                        Sign Up Page
                      </a>
                      <a
                        href="signin.html"
                        className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                      >
                        Sign In Page
                      </a>
                      <a
                        href="404.html"
                        className="block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary"
                      >
                        404 Page
                      </a>
                    </div>
                  </li> */}



                  <li className="group relative">
                    <a
                      href="/"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                    >
                      Publications
                    </a>
                  </li>
 

                  <li className="group relative">
                    <a
                      href="#team"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                    >
                      Research Area
                    </a>
                  </li>


                  
                  <li className="group relative">
                    <a
                      href="#contact"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                    >
                      About
                    </a>
                  </li>


                  
                  <li className="group relative">
                    <a
                      href="#contact"
                      className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-3 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                    >
                      Contact
                    </a>
                  </li>


                </ul>
       
       
       </>
    );
}

export default NavigatrionUL;