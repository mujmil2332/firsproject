import React, { useState } from 'react';
import {useForm} from 'react-hook-form';

function RegistrationForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const firstNameRef = React.useRef();

    const onSubmit = (data) => console.log('Form Data', data);
    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>First Name</label>
                    <input {...register('firstName', { required: 'First Name is  Requiredd' })} 
                    ref={firstNameRef} />
                    {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>
        <div>
            <label>Email</label>
            <input {...register('email',{required: 'Email is Required',
                pattern: {value: /^\S+@\S+$/i, message: 'Invalid email address'}
                })} />
                {errors.email && <span>{errors.email.message}</span>}
        </div>
        <button type="submit">Register</button>
            </form>
            <button onClick={() => firstNameRef.current.focus()}>Focus First Name</button>
        </div>
    );
}
export default RegistrationForm;

            
        
    
