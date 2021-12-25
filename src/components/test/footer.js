import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-5 md:py-8 lg:pt-14 lg:pb-10">
      <div className="flex justify-center">
        <img src="logo/logo-identity.svg" className="h-8 md:h-[3.125rem] " />
      </div>
      <div className="flex justify-center my-4 md:my-6 lg:my-10">
        <Link href={"#"}>
          <a className="mx-3 md:mx-5 text-caption md:text-base font-medium uppercase text-gray-600">
            Resep
          </a>
        </Link>
        <Link href={"#"}>
          <a className="mx-3 md:mx-5 text-caption md:text-base font-medium uppercase text-gray-600">
            Artikel
          </a>
        </Link>
        <Link href={"#"}>
          <a className="mx-3 md:mx-5 text-caption md:text-base font-medium uppercase text-gray-600">
            Tentang kami
          </a>
        </Link>
        <Link href={"#"}>
          <a className="mx-3 md:mx-5 text-caption md:text-base font-medium uppercase text-gray-600">
            Kontak
          </a>
        </Link>
      </div>
      <div className="flex justify-center border-t-[1px] border-gray-200">
        <p className="text-gray-400 text-tiny my-4 md:my-6 lg:my-10">
          © bukaresep. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
