import { ForgotPasswordEndForm, ForgotPasswordStartForm } from "@/components/form";
import { useState } from "react";


const ForgotPassword = () => {
    const [show, setShow] = useState("EMAIL")

    return (
        <div className='w-full min-h-screen max-h-full md:p-0 p-4 flex items-center justify-center bg-slate-100'>
            <div className='md:w-[27%] w-full md:h-fit h-full relative'>
                <div className='absolute -top-10 md:-right-10  -right z-10'>
                    <img
                        src="/home/back1.svg"
                        className="w-full h-full object-contain"
                        alt=""
                    />
                </div>
                <div className='absolute md:-bottom-14  -bottom-8 -left-14 z-10'>
                    <img
                        src="/home/back2.svg"
                        className="w-full h-full object-contain"
                        alt=""
                    />
                </div>
                {

                    show === "EMAIL" ? <ForgotPasswordStartForm setShow={setShow} /> : <ForgotPasswordEndForm setShow={setShow} />
                }

            </div>
        </div>
    )
}

export default ForgotPassword;
