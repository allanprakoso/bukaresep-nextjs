import Layout from "../components/layout";
import "../styles/globals.css";
import { CreatorAuthProvider } from '../context/CreatorAuthContext'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = router;

  if (pathname.search('creator')){
    return (
      <CreatorAuthProvider>
        <Layout type="creator">
          <Component {...pageProps} />
        </Layout>
      </CreatorAuthProvider>
    );
  }

  return (
      <Layout type="user">
        <Component {...pageProps} />
      </Layout>
  );

}

export default MyApp;
