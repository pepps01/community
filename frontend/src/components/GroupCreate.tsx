'use client'
import React, { useEffect } from 'react'
import { useStore } from '../../store';
import { Formik } from 'formik';
import Input from './Input';
import Button from './Button';

const GroupCreate: React.FC = () => {
    const { addGroup, }: any = useStore();

    return (
        <div className="flex flex-col items-center justify-start h-screen bg-gray-100 p-4 w-full">
            <div className='flex flex-col items-center  p-4 max-w-[1000px]'>
                <div>Create Group</div>
                <div>
                    <Formik
                        initialValues={{ name: '', description: '' }}
                        onSubmit={(values) => {
                            addGroup(values);
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
                                    type='text'
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    touched={touched.name}
                                    errors={errors.name}
                                    placeholder='Enter your name'
                                />
                                <Input
                                    type='text'
                                    name="description"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.description}
                                    touched={touched.description}
                                    errors={errors.description}
                                    placeholder='Enter group description'
                                />
                                <Button type="submit" title={"Create Group"} />
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>

    )
}

export default GroupCreate