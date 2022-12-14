import Head from 'next/head'
import Layout from '../layout/layout'
import Link from 'next/link'
import styles from '../styles/Form.module.css';
import Image from 'next/image'
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from 'react';
import { useFormik } from 'formik';

export default function Register() {

    const [show, setShow] = useState({ password: false, cpassword: false })

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            cpassword: '',
        },
        onSubmit,
        //this is a property for formik library & we create onSubmit function as well so only writen onSubmit
    })



    async function onSubmit(values) {
        console.log(values);
    }


    return (
        <Layout>


            <Head>
                <title>Register</title>
            </Head>

            <section className='w-3/4 mx-auto flex flex-col gap-10'>
                <div className="title">
                    <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
                    <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?</p>
                </div>

                {/* form */}
                <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                    <div className={styles.input_group}>
                        <input
                            type="text"
                            name='Username'
                            placeholder='Username'
                            className={styles.input_text}
                            {...formik.getFieldProps('username')}
                        />
                        <span className='icon flex items-center px-4'>
                            <HiOutlineUser size={25} />
                        </span>
                    </div>
                    <div className={styles.input_group}>
                        <input
                            type="email"
                            name='email'
                            placeholder='Email'
                            className={styles.input_text}
                            {...formik.getFieldProps('email')}
                        />
                        <span className='icon flex items-center px-4'>
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    <div className={styles.input_group}>
                        <input
                            type={`${show.password ? "text" : "password"}`}
                            name='password'
                            placeholder='password'
                            className={styles.input_text}
                            {...formik.getFieldProps('password')}
                        />
                        <span className='icon flex items-center px-4' onClick={() => setShow({ password: !show.password })}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>

                    <div className={styles.input_group}>
                        <input
                            type={`${show.cpassword ? "text" : "password"}`}
                            name='cpassword'
                            placeholder='Confirm Password'
                            className={styles.input_text}
                            {...formik.getFieldProps('cpassword')}
                        />
                        <span className='icon flex items-center px-4' onClick={() => setShow({ cpassword: !show.cpassword })}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>

                    {/* login buttons */}
                    <div className="input-button">
                        <button type='submit' className={styles.button}>
                            Register your account
                        </button>
                    </div>
                </form>

                {/* bottom */}
                <p className='text-center text-gray-400 '>
                    Have an account? <Link href={'/login'} legacyBehavior><a className='text-blue-700'>Sign In</a></Link>
                </p>
            </section>
        </Layout>
    )
}