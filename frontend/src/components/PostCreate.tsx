'use client';
import { Field, Formik } from 'formik';
import React, { useEffect } from 'react'
import { useStore } from '../../store';
import Input from './Input';
import Button from './Button';

// Stock Check Report
// Top 10 - 50 checks 

const PostCreate = () => {
    const { addPost, getGroups, groups } = useStore();

    useEffect(() => {
        getGroups()
    }, [])

    return (
        <div className='w-full'>
            <div> Create Post</div>
            <Formik
                initialValues={{ title: '', content: '', group: 1 }}
                onSubmit={(values) => {
                    addPost(values);
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
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                            touched={touched.title}
                            errors={errors.title}
                            placeholder='Enter your name'
                        />

                        <Input
                            type='text'
                            name="content"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.content}
                            touched={touched.content}
                            errors={errors.content}
                            placeholder='Enter your name'
                        />

                        <div className='flex flex-col justify-start gap-2 mb-4'>
                            <label>Select Group</label>
                            <Field as="select" name="group" className="border px-2 py-2  border-slate-200">
                                {groups.map((group: any) => (
                                    <option key={group.id} value={group.id}>{group.name}</option>
                                ))}
                            </Field>
                        </div>

                        <Button type="submit" title={"Create Post"} />
                    </form>
                )}
            </Formik>
        </div >
    )
}

export default PostCreate