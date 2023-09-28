import { Link } from "react-router-dom";
import NavigatrionUL from "./NavigatrionUL";


const Nav2 = () =>{



    return (
        <>
        
        
        <div
      className="ud-header fixed top-0 left-0 z-40 flex w-full items-center bg-[#002145]  "
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link to="/" className="navbar-logo block w-full py-5">
              <img
                src="assets/images/logo/logo.png"
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
              >
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-white"
                ></span>
              </button>
              <div>

                <h1 className="mb-0 text-xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug   md:leading-snug"> SUST HCI AI & Blockcahin Reserach Lab (HAB) </h1>
              <nav
                id="navbarCollapse"
                className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white pt-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:pr-4 lg:shadow-none xl:pr-6"
              >

                <NavigatrionUL/>
                
              </nav>


              </div>
            </div>
            {/* <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="signin.html"
                className="loginBtn py-3 px-7 text-base font-medium text-white hover:opacity-70"
              >
                Sign In
              </a>
              <a
                href="signup.html"
                className="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
              >
                Sign Up
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
        </>
    )
}


export  default Nav2;