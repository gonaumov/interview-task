import type { NextPage} from 'next'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Activate</title>
        <meta name="description" content="Activate page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1><Link href="/activate/windows">Go to Activate page</Link></h1>
      </main>
    </div>
  )
}

export default Home
