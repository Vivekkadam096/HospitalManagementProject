import { useState } from "react";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";

function BookAppointment() {
  const doctors = [
    "Dr. Sharma (Cardiology)",
    "Dr. Patil (Orthopedics)",
    "Dr. Joshi (Neurology)"
  ];

  const [form, setForm] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    time: ""
  });

  const [message, setMessage] = useState("");
  const [showQR, setShowQR] = useState(false);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/appointments", form);
      setMessage("✅ Appointment booked successfully!");
      setShowQR(true);
    } catch (err) {
      setMessage("❌ Booking failed");
      setShowQR(false);
    }
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={submitHandler}>
        <h2>Book Appointment</h2>

        {message && <p>{message}</p>}

        <input
          name="patientName"
          placeholder="Patient Name"
          value={form.patientName}
          onChange={changeHandler}
          required
        />

        <select
          name="doctorName"
          value={form.doctorName}
          onChange={changeHandler}
          required
        >
          <option value="">Select Doctor</option>
          {doctors.map((d, i) => (
            <option key={i} value={d}>{d}</option>
          ))}
        </select>

        <input type="date" name="date" value={form.date} onChange={changeHandler} required />
        <input type="time" name="time" value={form.time} onChange={changeHandler} required />

        <button type="submit">Book Appointment</button>
      </form>

      {showQR && (
        <div style={{ marginTop: "25px", textAlign: "center" }}>
          <h3>Appointment QR Code</h3>
          <p>Show this QR at hospital reception</p>

          <QRCodeCanvas
            value={`Patient: ${form.patientName}, Doctor: ${form.doctorName}, Date: ${form.date}, Time: ${form.time}`}
            size={180}
          />

          <div className="appointment-slip">
            <h4>Appointment Slip</h4>
            <p><b>Patient:</b> {form.patientName}</p>
            <p><b>Doctor:</b> {form.doctorName}</p>
            <p><b>Date:</b> {form.date}</p>
            <p><b>Time:</b> {form.time}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookAppointment;