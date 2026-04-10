import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    patientName: "",
    doctorName: ""
  });

const fetchData = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/appointments`
    );
    setData(res.data);
  } catch (err) {
    console.error(err);
  }
};
  useEffect(() => {
    fetchData();
  }, []);

  const startEdit = (a) => {
    setEditId(a._id);
    setForm({
      patientName: a.patientName,
      doctorName: a.doctorName
    });
  };

  const saveEdit = async () => {
    await axios.put(
  `https://hospitalmanagementproject.onrender.com/api/appointments/${editId}`,
  form
);
    setEditId(null);
    fetchData();
  };

  return (
    <div className="container">
      <h2>My Appointments</h2>
      <p style={{ color: "#555", marginBottom: "10px" }}>
  Welcome! Manage and track your hospital appointments below.
</p>

      <div className="stats">
        <div>
          <h2>{data.length}</h2>
          <p>Total Appointments</p>
        </div>
      </div>

      {data.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(a => (
              <tr key={a._id}>
                <td>
                  {editId === a._id ? (
                    <input
                      value={form.patientName}
                      onChange={e =>
                        setForm({ ...form, patientName: e.target.value })
                      }
                    />
                  ) : a.patientName}
                </td>

                <td>
                  {editId === a._id ? (
                    <input
                      value={form.doctorName}
                      onChange={e =>
                        setForm({ ...form, doctorName: e.target.value })
                      }
                    />
                  ) : a.doctorName}
                </td>

                <td>{a.date}</td>
                <td>{a.time}</td>

                <td>
                  {editId === a._id ? (
                    <button onClick={saveEdit}>Save</button>
                  ) : (
                    <button onClick={() => startEdit(a)}>Edit</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
  console.log(import.meta.env.VITE_API_URL);
}

export default Dashboard;