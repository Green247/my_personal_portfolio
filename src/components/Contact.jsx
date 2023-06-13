import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h1>Contact Me</h1>
        <form action="#" method="post">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
