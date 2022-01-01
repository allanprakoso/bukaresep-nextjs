import Footer from "./Footer";
import NavbarUser from "./NavbarUser";
import NavbarCreator from "./NavbarCreator";

const Layout = ({ children }) => {
  // cek akun user ato creator
  var user = true;

  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        {user && <NavbarUser />}
        {!user && <NavbarCreator />}
        <section className="main-content mb-auto">{children}</section>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
