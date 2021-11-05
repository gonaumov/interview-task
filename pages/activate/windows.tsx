import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Form from "../../components/form";
import { RegisterPage, serverPropsFactory } from "../../lib/utilities";

const WindowsPage: NextPage<RegisterPage> = ({activationKey, isKeyValid}) => {
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
          <Form platform='windows' activationKey={activationKey} isKeyValid={isKeyValid} />
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps = serverPropsFactory()


export default WindowsPage;
