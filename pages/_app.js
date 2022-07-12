import '../styles/globals.css'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="container-fluid">
      <Component {...pageProps} />
      </div>
    </Layout>
  )
}

export default MyApp
