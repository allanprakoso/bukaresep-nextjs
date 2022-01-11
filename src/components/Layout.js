import Footer from "./Footer";
import NavbarUser from "../parts/user/NavbarUser";
import NavbarCreator from "../parts/Creator/NavbarCreator";

const Layout = ({ type, children }) => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        {type == 'creator' ? <NavbarCreator /> : <NavbarUser />}
        <section className="md:mt-16 main-content mb-auto">{children}</section>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
