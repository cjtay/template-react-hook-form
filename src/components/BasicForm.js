import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const initialValue = '';

const BasicForm = () => {
    const { register, handleSubmit, watch } = useForm();
    const [previewSource, setPreviewSource] = useState();

    // console.log('watch: ', watch('name'));
    let count;
    if (watch('name')) {
        count = watch('name').length;
    }

    const onSubmit = (data) => {
        console.log(data);
        console.log('photo: ', data.photo[0]);
    };

    const handleFileInputChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        previewFile(file);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col justify-start max-w-3xl py-5 m-5 mx-auto bg-gray-100'>
                    <label className='mr-auto font-bold text-swa-3'>Name</label>
                    <input
                        defaultValue={initialValue}
                        {...register('name')}
                        className='w-1/2 px-3 py-2 text-swa-3'
                    />
                    <span>word count: {count}</span>
                    <label className='mr-auto font-bold text-swa-3'>Age</label>
                    <input
                        defaultValue='20'
                        {...register('age')}
                        className='w-1/2 px-3 py-2 text-swa-3'
                    />
                    <input
                        name='photo'
                        type='file'
                        {...register('photo')}
                        className='w-1/2 px-3 py-2 text-swa-3'
                        onChange={handleFileInputChange}
                    />
                    <input type='submit' className='w-1/2 mt-5 btn-dark' />

                    {previewSource && (
                        <img
                            src={previewSource}
                            style={{
                                height: '200px',
                                marginTop: '10px',
                                borderRadius: '10px',
                                objectFit: 'cover',
                            }}
                            alt='test'
                        />
                    )}
                </div>
            </form>
        </div>
    );
};

export default BasicForm;
