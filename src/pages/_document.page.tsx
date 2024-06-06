import { GA } from '@components/utils'
import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
    return (
        <Html lang='ko'>
            <Head>
                <GA />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
