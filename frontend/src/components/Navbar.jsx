import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2> Hospital Management</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/book">Book</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/contact">Contact</Link>

        {/* Logout looks like a normal nav item */}
        <span
          className="nav-logout"
          onClick={handleLogout}
        >
          Logout
        </span>
      </div>
    </div>
  );
}

export default Navbar;