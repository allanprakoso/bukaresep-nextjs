import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-3 md:py-6 lg:pt-10 mt-[120px] ">
      <div className="flex justify-center">
        <img src="logo/logo-identity.svg" className="h-8 md:h-[3.125rem] " />
      </div>
      <div className="flex justify-center my-4 md:my-8">
        <Link href={"#"}>
          <a className="mx-3 md:mx-5 text-caption md:text-base font-medium uppercase text-gray-600 hover:text-brand-dark">
            Resep
          </a>
        </Link>
        <Link href={"#"}>
          <a className="mx-3 md:mx-5 text-caption md:text-base font-medium uppercase text-gray-600 hover:text-brand-dark">
            Artikel
          </a>
        </Link>
        <Link href={"#"}>
          <a className="mx-3 md:mx-5 text-caption md:text-base font-medium uppercase text-gray-600 hover:text-brand-dark">
            Tentang kami
          </a>
        </Link>
        <Link href={"#"}>
          <a className="mx-3 md:mx-5 text-caption md:text-base font-medium uppercase text-gray-600 hover:text-brand-dark">
            Kontak
          </a>
        </Link>
      </div>
      <div className="flex justify-center border-t-[1px] border-gray-200">
        <p className="text-gray-400 text-tiny lg:mt-6">
          © bukaresep. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
