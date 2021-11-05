import type { NextPage} from 'next'
import styles from '../styles/Home.module.css'
import { useCookie } from "next-cookie";
import { GetServerSideProps } from "next";

type pageProps = {
    cookie: any
}

type registerData = {
    platform: string
    activationKey: string
} | undefined

const Success: NextPage<pageProps> = (props) => {
    const cookie = useCookie(props.cookie)
    const registerData = cookie.get<registerData>('register')
    return (
        <div className={styles.container}>
            <h1>Success page</h1>
            <div>
            {registerData && <ol><li>platform:{registerData.platform}</li><li>activation key:{registerData.activationKey}</li></ol>}
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookie = useCookie(context)
    return {
        props: {
            cookie: context.req.headers.cookie || ''
        }
    }
}

export default Success;