import Link from "next/link";
import { useState } from "react";
import { Menu_Burger, Sign_in, Search } from "../../assets/icons";
import Button from "./button";
// import Menu from "./menu";

function Navbar() {
  return (
    <>
      {/* Navbar sebelum login */}
      <nav className="flex justify-between items-center px-[7.5rem] py-3 border-solid border-[1px] border-gray-200">
        <div className="flex items-center">
          {/* button menu */}
          <Button color="LINK" type="button" data-modal-toggle="default-modal">
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

        {/* blm login */}
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

        {/* sudah login */}
      </nav>
    </>
  );
}

export default Navbar;
