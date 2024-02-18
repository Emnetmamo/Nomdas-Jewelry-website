import React from 'react';
import '../assets/css/ConatctUs/Contact.css'

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Feel free to reach out to us for any inquiries or collaborations.</p>
        <p>
          <strong>Email:</strong> info@nomdas.com<br />
          <strong>Phone:</strong> +1 123 456 789<br />
          <strong>Address:</strong> 123 Nomad Street, Cityville, Country
        </p>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        {/* Add your contact form component or HTML here */}
      </div>

      <div className="map-section">
        <h2>Visit Us</h2>
        <p>Explore our showroom located in the heart of the city.</p>

<iframe
  title="Nomdas Jewelry Office Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.6950904666387!2d2.2943513156744517!3d48.85884477949007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4cb6c23f57cd3875!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1685563260568!5m2!1sen!2sus"
  width="100%"
  height="300"
  allowFullScreen=""
  loading="lazy"
></iframe>

      </div>
    </div>
  );
}

export default Contact;
