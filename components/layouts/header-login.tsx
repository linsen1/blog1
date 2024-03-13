'use server'

import {auth,UserButton} from '@clerk/nextjs';

const LoginButton = () => {

    const {userId}= auth();
    return (
        <>
            {
                userId ? (
                    <>
                        <UserButton />
                    </>
                ) : (
                    <span
                        className="flex justify-center items-center w-8 h-8 text-center rounded-full object-cover bg-success
                        text-sm text-white">
                        登录
                    </span>

                )
            }
        </>
    );
};

export default LoginButton;
