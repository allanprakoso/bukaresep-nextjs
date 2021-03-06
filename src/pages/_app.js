import Layout from "../components/layout";
import "../styles/globals.css";
import { CreatorAuthProvider } from '../context/CreatorAuthContext'
import { UserAuthProvider } from '../context/UserAuthContext'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = router;

  if (pathname.search('creator') > 0) {
    return (
      <CreatorAuthProvider>
        <Layout type="creator">
          <Component {...pageProps} />
        </Layout>
      </CreatorAuthProvider>
    );
  } else {
    return (
      <UserAuthProvider>
        <Layout type="user">
          <Component {...pageProps} />
        </Layout>
      </UserAuthProvider>
    );
  }
}

export default MyApp;
