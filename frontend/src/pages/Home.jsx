import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
    <div className="notice-bar">
  📢 Online appointments available | Emergency services 24×7
</div>
      {/* Hero Section */}
      <div className="hero">
        <h1>Trusted Healthcare for Your Family</h1>
        <p>
          Advanced treatment • Expert doctors • 24/7 emergency and patient care
        </p>

        <button
          className="hero-btn"
          onClick={() => navigate("/book")}
        >
          Book Appointment
        </button>
      </div>

      {/* Services Section */}
      <div className="card-section">
        <div className="card">
          <h3>Emergency Care</h3>
          <p>
            Immediate medical support with well-equipped emergency services
            available round the clock.
          </p>
        </div>

        <div className="card">
          <h3>Expert Specialists</h3>
          <p>
            Highly experienced doctors and specialists providing personalized
            treatment.
          </p>
        </div>

        <div className="card">
          <h3>Modern Diagnostics</h3>
          <p>
            Advanced laboratories and diagnostic facilities ensuring accurate
            and fast results.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="stats">
        <div>
          <h2>50+</h2>
          <p>Qualified Doctors</p>
        </div>
        <div>
          <h2>20+</h2>
          <p>Medical Departments</p>
        </div>
        <div>
          <h2>10,000+</h2>
          <p>Satisfied Patients</p>
        </div>
      </div>
    </>
  );
}

export default Home;