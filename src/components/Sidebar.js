import Link from "next/link";
import Button from "./Button";
import { Crossl, Facebook, Instagram, Twitter } from "../assets/icons";

function Sidebar({ closeMenu }) {
  return (
    <div
      id="sidebar"
      aria-hidden="true"
      className="bg-gray-400/30 fixed top-0 left-0 right-0 z-50"
    >
      {/* modal content */}
      <div className="bg-white h-[100vh] pt-9 w-80 drop-shadow-2xl ">
        <div className="mx-4 mb-9">
          {/* button menu */}
          <Button type="button" color="LINK" onClick={() => closeMenu(false)}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Crossl />
            </svg>
          </Button>
        </div>
        <div className="mx-14 ">
          <img src="/logo/logo-identity.svg" className="md:h-10" />
          {/* nav link */}
          <div className="my-12 flex flex-col space-y-9 mb-[180px]">
            <Link href="#">
              <a className="ml-2 text-caption md:text-base font-medium uppercase text-gray-600 hover:text-brand-dark">
                resep
              </a>
            </Link>
            <Link href="#">
              <a className="ml-2 text-caption md:text-base font-medium uppercase text-gray-600 hover:text-brand-dark">
                artikel
              </a>
            </Link>
            <Link href="#">
              <a className="ml-2 text-caption md:text-base font-medium uppercase text-gray-600 hover:text-brand-dark">
                tentang kami
              </a>
            </Link>
            <Link href="#">
              <a className="ml-2 text-caption md:text-base font-medium uppercase text-gray-600 hover:text-brand-dark">
                kontak
              </a>
            </Link>
          </div>

          <Link href="#">
            <Button size="LONG">Bagikan resep </Button>
          </Link>

          {/* sosmed */}
          <div className="mt-24 flex flex-col items-center">
            <p className="text-base font-medium text-gray-400">
              {" "}
              Follow Bukaresep
            </p>
            <div className="mt-2 flex space-x-4">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Instagram />
              </svg>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Facebook />
              </svg>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Twitter />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
