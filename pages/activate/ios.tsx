import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { RegisterPage, serverPropsFactory } from "../../lib/utilities";
import Form from "../../components/form";

const IosPage: NextPage<RegisterPage> = ({activationKey, isKeyValid}) => {
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
                    <Link href="/activate/windows">Windows</Link>  / <Link href="/activate/android">Android</Link> / iOS
                </div>
                <div>
                    <Form platform='ios' activationKey={activationKey} isKeyValid={isKeyValid} />
                </div>
            </main>
        </div>
    )
}

export const getServerSideProps = serverPropsFactory()

export default IosPage;
