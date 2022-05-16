import Footer from '../component/footer'
import Header from '../component/header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<div>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </div>
  )
}

export default MyApp
