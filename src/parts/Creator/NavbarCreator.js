import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { Menu_Burger, Sign_in, Search, Upload } from "../../assets/icons";
import { DropdownMenu, DropdownItem, Divider } from "../../components/Dropdown";
import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar";
import AuthContext from "../../context/CreatorAuthContext";
import LoginForm from "./LoginForm";

function NavbarCreator() {
  const router = useRouter();
  const { creator, logoutCreator } = useContext(AuthContext);
  var isLogin = creator ? true : false;

  const [openMenu, setOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <>
      <nav className="absolute top-0 z-5 w-screen bg-white border-solid border-[1px] border-gray-200">
        {openLogin && !isLogin && (
          <LoginForm close={() => setOpenLogin(false)} />
        )}

        <navlink className="flex justify-between items-center px-[7.5rem] py-1.5 ">
          <div className="flex items-center">
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

          <Link href="#" className="cursor-pointer">
            <img src="/logo/logo-identity.svg" className="md:h-10" />
          </Link>

          <div>
            <div className="flex" id="user-navbar">
              {/* if isLogin is false */}
              {!isLogin && (
                <div className="flex space-x-4">
                  <Button color="NOBG" onClick={() => setOpenLogin(true)}>
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

              {/* if isLogin is true */}
              {isLogin && (
                <div className="profile flex items-center space-x-8">
                  <Button color="LINK" onMouseEnter={() => setIsOpen(true)}>
                    <img src="pic/lp3.jpg" className="w-8 h-8 rounded-full" />
                  </Button>
                  <Button
                    onClick={() => router.push("/creator/upload")}
                    color="PRIMARY"
                  >
                    <div className="pr-2">
                      <svg
                        fill="#FFF"
                        width="16px"
                        height="16px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <Upload />
                      </svg>
                    </div>
                    Resep
                  </Button>
                </div>
              )}
            </div>
          </div>
        </navlink>
      </nav>

      {isOpen && (
        <DropdownMenu onMouseLeave={() => setIsOpen(false)}>
          <DropdownItem>Profil Saya</DropdownItem>
          <DropdownItem>Edit profil</DropdownItem>
          <Divider />
          <DropdownItem>Koleksi</DropdownItem>
          <DropdownItem>Draft</DropdownItem>
          <Divider />
          <DropdownItem
            color="RED"
            onClick={() => {
              logoutCreator();
              router.push("/creator");
            }}
          >
            Keluar
          </DropdownItem>
        </DropdownMenu>
      )}

      {openMenu && <Sidebar closeMenu={setOpenMenu} />}
    </>
  );
}

export default NavbarCreator;
