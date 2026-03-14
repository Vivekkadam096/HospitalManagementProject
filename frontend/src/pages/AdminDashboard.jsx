import { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/appointments")
      .then(res => setData(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Admin Panel – All Appointments</h2>

      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          {data.map((a, i) => (
            <tr key={i}>
              <td>{a.patientName}</td>
              <td>{a.doctorName}</td>
              <td>{a.date}</td>
              <td>{a.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
