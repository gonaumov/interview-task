import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const AndroidPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Activate key for Android</title>
        <meta name="description" content="Activate page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          Activate your license on:
        </h3>
        <div>
          <Link href="/activate/windows">Windows</Link>  / Android /  <Link href="/activate/ios">iOS</Link>
        </div>
      </main>
    </div>
  )
}

export default AndroidPage;
