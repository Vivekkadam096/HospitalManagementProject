function Contact() {
  return (
    <div className="container">
      <h2>Contact Us</h2>

      <p>
        If you have any questions, appointment-related queries, or need
        assistance, feel free to contact us using the information below.
      </p>

      <p>📍 <b>Address:</b> Vikhe Patil Hospital, Ahmednagar, Maharashtra</p>
      <p>📞 <b>Phone:</b> +91 98765 43210</p>
      <p>📧 <b>Email:</b> support@vikhepatilhospital.com</p>

      <p style={{ marginTop: "15px" }}>
        <b>Working Hours:</b><br />
        Monday – Saturday: 9:00 AM – 8:00 PM<br />
        Sunday: Emergency Services Only
      </p>

      <p style={{ marginTop: "10px" }}>
        For emergency medical services, please visit the hospital directly or
        contact our emergency helpline.
      </p>
    </div>
  );
}

export default Contact;