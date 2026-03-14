function Doctors() {
  const doctors = [
    {
      name: "Dr. Sharma",
      dept: "Cardiology",
      time: "10 AM - 2 PM",
      exp: "15+ Years Experience",
      desc: "Specialist in heart-related diseases and preventive cardiology."
    },
    {
      name: "Dr. Patil",
      dept: "Orthopedics",
      time: "1 PM - 5 PM",
      exp: "12+ Years Experience",
      desc: "Expert in bone, joint, and spine-related treatments."
    },
    {
      name: "Dr. Joshi",
      dept: "Neurology",
      time: "9 AM - 1 PM",
      exp: "10+ Years Experience",
      desc: "Specialist in brain, nerve, and neurological disorders."
    }
  ];

  return (
    <div className="container">
      <h2>Doctor Availability</h2>

      <p style={{ marginBottom: "20px" }}>
        Our hospital is supported by experienced and highly qualified doctors
        across various medical specialties. Below is the availability schedule
        of our consultants.
      </p>

      <div className="card-section">
        {doctors.map((d, i) => (
          <div className="card" key={i}>
            <h3>{d.name}</h3>
            <p><b>Department:</b> {d.dept}</p>
            <p>
  <b>Status:</b>
  <span className="status available"> Available</span>
</p>
            <p><b>Experience:</b> {d.exp}</p>
            <p style={{ fontSize: "14px", marginTop: "10px" }}>
              {d.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;