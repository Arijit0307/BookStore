import React, { useState } from 'react';

function FloatingInput({ label, name, type = 'text', value, onChange }) {
  return (
    <div className="relative group focus-within:text-pink-500">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full px-5 pt-6 pb-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
      />
      <label
        htmlFor={name}
        className={`absolute left-5 text-gray-400 transition-all duration-200 ${
          value ? 'top-2 text-xs' : 'top-5 text-base'
        } group-focus-within:top-2 group-focus-within:text-xs`}
      >
        {label}
      </label>
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-16" id="contact">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Contact Our Bookstore
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Got questions about books, orders, or want recommendations?  
          We'd love to help you out!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <FloatingInput label="Your Name" name="name" value={formData.name} onChange={handleChange} />
          <FloatingInput label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} />

          <div className="relative group focus-within:text-pink-500">
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-5 pt-6 pb-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            ></textarea>
            <label
              htmlFor="message"
              className={`absolute left-5 text-gray-400 transition-all duration-200 ${
                formData.message ? 'top-2 text-xs' : 'top-5 text-base'
              } group-focus-within:top-2 group-focus-within:text-xs`}
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition transform active:scale-95 shadow"
          >
            Send Message
          </button>

          {submitted && (
            <div className="text-green-500 text-center font-semibold animate-bounce mt-4">
              Thanks! We'll get back to you shortly.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
