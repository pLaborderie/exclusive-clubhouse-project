import '../styles/globals.css';
import Layout from '../components/Layout.js';

function MyApp({ Component, pageProps }) {
  const links = [
    { href: '/', name: 'Home', isActive: true },
    { href: '/sign-up', name: 'Sign up', isActive: false },
    { href: '/log-in', name: 'Log in', isActive: false },
  ];
  return (
    <Layout links={links}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
