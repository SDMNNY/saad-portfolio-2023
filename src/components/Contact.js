import React, { useState } from 'react';
import './Contact.css';  // Make sure you have this CSS file for styling

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
  // New State variables for loading and success
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation for email
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state

    // Simulate an API call (replace with your actual API call)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false); // Unset loading state
    setIsSuccess(true);  // Set success state

    // Clear the form data
    setFormData({
      name: '',
      email: '',
      message: ''
    });
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
        
        {/* Conditional rendering for loading and success messages */}
        {isLoading ? <div>Loading...</div> : null}
        {isSuccess ? <div>Message sent successfully!</div> : null}

        <button type="submit" disabled={isLoading}>Send</button>
      </form>
    </section>
  );
};

export default Contact;
