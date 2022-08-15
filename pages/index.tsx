import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'

export default function Home({ contents }: { contents: any }) {
  return (
    <>
      <Head>
        { ReactHtmlParser (contents) }
      </Head>
      <main>
        <div>Welcome</div>
      </main>
    </>
  )
}
