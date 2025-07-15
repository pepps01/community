'use client';
import { Formik } from 'formik';
import React from 'react'
import { useStore } from '../../store';
import Input from './Input';
import Button from './Button';

// Stock Check Report
// Top 10 - 50 checks 

const PostCreate = () => {
    const { addPost } = useStore();

    return (
        <div>
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
                        <Button type="submit" title={"Create Post"} />
                    </form>
                )}
            </Formik>
        </div >
    )
}

export default PostCreate