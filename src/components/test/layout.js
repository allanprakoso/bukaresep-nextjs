import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <section className="main-content mb-auto">{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
