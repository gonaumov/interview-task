import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const WindowsPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Activate key for Windows</title>
        <meta name="description" content="Activate page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3 className={styles.title}>
          Activate your license on:
        </h3>
        <div>
          Windows / <Link href="/activate/android">Android</Link> /  <Link href="/activate/ios">iOS</Link>
        </div>
        <div>
          <form>
            <p><label htmlFor="activation-key">Enter your Activation Key:</label></p>
            <input id="activation-key" type="text" name="activationKey" />
          </form>
        </div>
      </main>
    </div>
  )
}

export default WindowsPage;
