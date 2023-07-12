import 'bootstrap/dist/css/bootstrap.min.css';
import AuthLayout from '../components/AuthLayout';
import Layout from '../components/Layout';

const layouts = {
    AuthLayout: AuthLayout,
    Layout: Layout,
  };

function MyApp({ Component, pageProps }) {
    const Layouts = layouts[Component.layout] || ((children) => <>{children}</>);
    return (
        <Layouts>
        <Component {...pageProps} />
        </Layouts>
    )
}
  

export default MyApp;