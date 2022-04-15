//Importar tudo que for global para essa pagina
import '../src/globalStyle.css'
import Head from 'next/head'

function App ({Component, pageProps}) {

    return(
        <>
        <Head><title>Netflix Clone using React/Next</title></Head>
        <Component {...pageProps} />
        </>
    )

}

export default App