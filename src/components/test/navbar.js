import Link from "next/link";
import { useState } from "react";
import { Menu_Burger, Sign_in, Search } from "../../assets/icons";
import Button from "./button";
import Sidebar from "./sidebar";

function Navbar() {
  // cek user
  var user = true;
  const [openMenu, setOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-[7.5rem] py-3 border-solid border-[1px] border-gray-200">
        <div className="flex items-center">
          {/* button menu */}
          <Button color="LINK" onClick={() => setOpenMenu(true)}>
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Menu_Burger />
            </svg>
          </Button>

          <form className="flex items-center ml-8">
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2"
            >
              <Search />
            </svg>
            <input
              id="search"
              type="text"
              placeholder="Cari resep"
              className="focus:outline-none focus:border-b-2 text-base text-gray-600"
            />
          </form>
        </div>
        <Link href="#">
          <img src="/logo/logo-identity.svg" className="md:h-10" />
        </Link>

        <div className="flex">
          {/* if user is false */}
          {!user && (
            <div className="flex space-x-4">
              <Button color="NOBG">
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                  transform="translate(0,0) scale(-1, 1)"
                >
                  <Sign_in />
                </svg>
                Masuk
              </Button>
              <Button>Daftar</Button>
            </div>
          )}

          {/* if user is true */}
          {user && (
            <div className="flex items-center">
              <p className="text-sm font-semibold text-gray-600">
                User Account
              </p>
              <Button color="LINK" onMouseEnter={() => setIsOpen(true)}>
                <img src="pic/lp3.jpg" className="w-8 h-8 rounded-full" />
              </Button>
            </div>
          )}
        </div>
      </nav>

      {isOpen && (
        <div
          onMouseLeave={() => setIsOpen(false)}
          id="dropdown-profile"
          className="absolute w-[244px] top-16 right-24 bg-white py-6 rounded-md drop-shadow-xl flex flex-col space-y-2 border-solid border-[0.8px] border-gray-200"
        >
          <Link href="#">
            <button className="w-full hover:bg-gray-100 py-2 px-8 text-base text-left text-gray-600 capitalize">
              Profil saya
            </button>
          </Link>
          <Link href="#">
            <button className="w-full hover:bg-gray-100 py-2 px-8 text-base text-left text-gray-600 capitalize">
              Edit profil
            </button>
          </Link>

          <div className="border-b-[0.8px] border-gray-200 mx-6"></div>

          <Link href="#">
            <button className="w-full hover:bg-gray-100 py-2 px-8 text-base text-left text-gray-600 capitalize">
              Koleksi resep
            </button>
          </Link>
          <Link href="#">
            <button className="w-full hover:bg-gray-100 py-2 px-8 text-base text-left text-gray-600 capitalize">
              review saya
            </button>
          </Link>

          <div className="border-b-[0.8px] border-gray-200 mx-6"></div>

          <Link href="#">
            <button className="w-full hover:bg-gray-100 py-2 px-8 text-base text-left text-brand-dark capitalize">
              Keluar
            </button>
          </Link>
        </div>
      )}

      {openMenu && <Sidebar closeMenu={setOpenMenu} />}
    </>
  );
}

export default Navbar;
