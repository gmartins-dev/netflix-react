//Importar tudo que for global para essa pagina
import '../src/globalStyle.css'

function App ({Component, pageProps}) {

    return(

        <Component {...pageProps} />
    )

}

export default App