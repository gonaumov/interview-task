import { GetServerSideProps } from "next";

export const serverPropsFactory = () => {
    const getServerSideProps: GetServerSideProps = async (context) => {
        const  activationKey  = typeof context.query.key === 'string' && context.query.key;
        let isKeyValid = activationKey && activationKey.length > 0 && /^[a-z]+-[a-z]+$/i.test(activationKey);
        return {
            props: {
                activationKey,
                isKeyValid
            },
        };
    }
    return getServerSideProps
}

export type RegisterPage = {
    activationKey: string,
    isKeyValid: boolean
}