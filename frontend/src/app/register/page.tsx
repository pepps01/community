'use client';
import React from 'react'
import { Formik } from 'formik';
import { useStore } from '../../../store';
import Button from '@/components/Button';
import Input from '@/components/Input';


const Register: React.FC = () => {
    const { register }: any = useStore();
    return (

        <div className='flex flex-col items-center justify-start h-screen bg-gray-100 p-4 w-full'>

            <div className='flex flex-col items-center  p-4 max-w-[1000px]'>
                <div>Register</div>
                <div>
                    <Formik
                        initialValues={{ name: '', email: '', password: '' }}
                        onSubmit={(values) => {
                            register(values);
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
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    className='border border-gray-300 rounded-md p-2 py-3 w-full'
                                    placeholder="Enter your name"
                                    errors={errors.name}
                                    touched={touched.name}
                                />

                                <Input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    className='border border-gray-300 rounded-md p-2 py-3 w-full'
                                    placeholder="Enter your email"
                                    required
                                    errors={errors.email}
                                    touched={touched.email}
                                />

                                <Input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    className='border border-gray-300 rounded-md p-2 py-3 w-full'
                                    placeholder="Enter your password"
                                    required
                                    errors={errors.password}
                                    touched={touched.password}
                                />

                                <Button type="submit" title={"Register"} />
                            </form>
                        )}
                    </Formik>

                    <div className='text-sm text-gray-500 mt-4'>
                        Already have an account? <a href="/login" className='text-blue-500 hover:underline'>Login</a>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Register;