import type { NextPage, InferGetStaticPropsType, GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Form from "../../components/form";

type WindowsPage = {
  activationKey: string,
  isKeyValid: boolean
}

const WindowsPage: NextPage<WindowsPage> = ({activationKey, isKeyValid}) => {
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
          <Form platform='windows' activationKey={activationKey} isKeyValid={isKeyValid} />
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const  activationKey  = typeof context.query.key === 'string' && context.query.key;
  let isKeyValid = activationKey && activationKey.length > 0 && /^[a-z]+-[a-z]+$/i.test(activationKey);
  return {
    props: {
      activationKey,
      isKeyValid
    },
  };
}


export default WindowsPage;
