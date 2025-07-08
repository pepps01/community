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
                initialValues={{ name: '' }}
                onSubmit={(values) => {
                    addPost(values.name);
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
                        <Button type="submit" title={"Create Post"} />
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default PostCreate