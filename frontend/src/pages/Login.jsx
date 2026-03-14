import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password
    });

    if (res.data.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <form className="form-box" onSubmit={login}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
        required
      />

      <button>Login</button>
    </form>
  );
}

export default Login;
