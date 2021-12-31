import Footer from "./footer";
import NavbarUser from "./navbar-user";
import NavbarCreator from "./navbar-creator";

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
