import validKeysPerPlatform from "../lib/validKeysPerPlatform";
import { FormEvent, KeyboardEvent, useEffect, useState } from "react";
import { useCookie } from 'next-cookie'
import { useRouter } from 'next/router'


interface FormProps {
    platform: keyof typeof validKeysPerPlatform
    activationKey: string
    isKeyValid: boolean
}

export default function Form({platform, activationKey, isKeyValid}: FormProps) {
    const [leftPart, setLeftPart] = useState(() => isKeyValid ? activationKey.split('-')[0] : '');
    const [rightPart, setRightPart] = useState(() => isKeyValid ? activationKey.split('-')[1] : '');
    const [isError, setIsError] = useState(() => !isKeyValid)
    const [errorMessage, setErrorMessage] = useState(() => !isKeyValid && 'Invalid key')
    const cookie = useCookie()
    const router = useRouter()

    const registerUser = async (event: FormEvent) => {
        event.preventDefault()
        setIsError(false);
        setErrorMessage('');
        const activationKey = `${leftPart}-${rightPart}`;
        const res = await fetch(
            '/api/activate-key',
            {
                body: JSON.stringify({
                    activationKey,
                    platform
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            }
        )
        const result = await res.json();
        setIsError(!result.isValid);
        setErrorMessage(result.error);
        if (result.isValid) {
            cookie.set('register', {
                activationKey,
                platform
            })
            await router.push('/success')
        }
    }

    return (
        <form onSubmit={registerUser}>
            [{isError}] - [{activationKey}]
            {isError && activationKey && <div>{errorMessage}</div>}
            <div>
                {leftPart} - {rightPart}
                <p>
                    <label htmlFor="activation-key">Enter your Activation Key:</label>
                </p>
                <input
                    id="left-part"
                    type="text"
                    name="left-part"
                    defaultValue={leftPart}
                    required
                    onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => {
                        if (/^[a-z]+$/i.test(event.currentTarget.value)) {
                            setLeftPart(event.currentTarget.value)
                        } else {
                            event.currentTarget.value = ''
                            setLeftPart('')
                        }
                    }}
                />
                -
                <input
                    id="right-part"
                    type="text"
                    name="right-part"
                    defaultValue={rightPart}
                    required
                    onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => {
                        if (/^[a-z]+$/i.test(event.currentTarget.value)) {
                            setRightPart(event.currentTarget.value)
                        } else {
                            event.currentTarget.value = ''
                            setRightPart('')
                        }
                    }}
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
}