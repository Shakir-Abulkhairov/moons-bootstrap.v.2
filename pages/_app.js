
import '/styles/global.css';
import Layout from '../components/Layout';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
         <Layout>
             <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
         </Layout>
  )
}

export default MyApp
