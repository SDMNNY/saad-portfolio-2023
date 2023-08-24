import React, { useState } from 'react';
import './Contact.css';  // Create a Contact.css file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation
    if (name === 'email') {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      setFormErrors({
        ...formErrors,
        [name]: emailPattern.test(value) ? '' : 'Invalid email address'
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Validation for required fields
    if (!value) {
      setFormErrors({
        ...formErrors,
        [name]: 'This field is required'
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send formData to server or process it as needed
    console.log(formData);
  };

  return (
    <section className="contact-section">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
