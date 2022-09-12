import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/sidebar'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex">
      <Head>
        <title>TailwindCSS Tutorial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
    </div>
  )
}

export default Home
