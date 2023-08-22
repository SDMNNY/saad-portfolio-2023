import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" ref={register({ required: true })} />
            {errors.name && <span>Name is required</span>}
            
            <input name="email" ref={register({ required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
            {errors.email && <span>Valid email is required</span>}

            <textarea name="message" ref={register({ required: true })}></textarea>
            {errors.message && <span>Message is required</span>}

            <button type="submit">Send</button>
        </form>
    );
}

export default Contact;
