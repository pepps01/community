'use client'
import React from 'react'
import { Formik } from 'formik';
import { useStore } from '../../../store';
import Input from '@/components/Input';
import Button from '@/components/Button';

const Login: React.FC = () => {
    const { login }: any = useStore();

    return (
        <div className="flex flex-col items-center justify-start h-screen bg-gray-100 p-4 w-full">

            <div className='flex flex-col items-center  p-4 max-w-[1000px]'>
                <div>Login</div>
                <div>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => {
                            login(values);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <Input
                                    type='email'
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    touched={touched.email}
                                    errors={errors.email}
                                    placeholder='Enter your email'
                                />

                                <Input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    touched={touched.password}
                                    errors={errors.password}
                                    placeholder='Enter your password'
                                />
                                <Button type="submit" title={"Login"} />
                            </form>
                        )}
                    </Formik>
                    <div className='text-sm text-gray-500 mt-4'>
                        Don't have an account? <a href="/register" className='text-blue-500 hover:underline'>Sign Up</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login