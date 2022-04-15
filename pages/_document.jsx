//É como se fosse o esqueleto fundamental HTML do projeto

import Document, {Html, Head, Main, NextScript} from "next/document";

class NewDocument extends Document {
   render(){

        return (

            <Html>
                <Head>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>

        )

   } 
}

export default NewDocument