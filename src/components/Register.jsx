import { useState } from "react";

const genders = [
  { id: 1, label: "Male", value: "Male" },
  { id: 2, label: "Female", value: "Female" },
  { id: 3, label: "Others", value: "Others" }
];

const hobbiesList = [
  { id: 1, label: "Music", value: "Music" },
  { id: 2, label: "Movies", value: "Movies" },
  { id: 3, label: "Plastic Model", value: "Plastic Model" }
];

const roles = [
  { id: 1, label: "General staff", value: "General staff" },
  { id: 2, label: "Developer", value: "Developer" },
  { id: 3, label: "System Analyst", value: "System Analyst" }
];

function Register() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("");

  function onHobbiesToggle(event) {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (!isChecked) {
      setHobbies((prev) => prev.filter(item => item !== value));
    } else {
      setHobbies((prev) => [...prev, value]);
    }
  }

  return (
    <div style={{ padding: "10px" }}>
      <h2>Registration Form</h2>

      {/* Username */}
      <div>
        <label>Username: </label>
        <input type="text" value={username}
          onChange={(e) => setUsername(e.target.value)} />
      </div>

      {/* Firstname */}
      <div>
        <label>Firstname: </label>
        <input type="text" value={firstname}
          onChange={(e) => setFirstname(e.target.value)} />
      </div>

      {/* Lastname */}
      <div>
        <label>Lastname: </label>
        <input type="text" value={lastname}
          onChange={(e) => setLastname(e.target.value)} />
      </div>

      {/* Gender */}
      <div>
        <label>Gender: </label>
        {genders.map((g) => (
          <label key={g.id} style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              name="gender"
              value={g.value}
              onChange={(e) => setGender(e.target.value)}
            />
            {g.label}
          </label>
        ))}
      </div>

      {/* Hobbies */}
      <div>
        <label>Hobbies: </label>
        {hobbiesList.map((h) => (
          <label key={h.id} style={{ marginLeft: "10px" }}>
            <input
              type="checkbox"
              value={h.value}
              onChange={onHobbiesToggle}
            />
            {h.label}
          </label>
        ))}
      </div>

      {/* Role */}
      <div>
        <label>Apply Role: </label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">-- Select Role --</option>
          {roles.map((r) => (
            <option key={r.id} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <hr />

      {/* Display Input Values */}
      <h3>Input Preview</h3>
      <p><b>Username:</b> {username}</p>
      <p><b>Firstname:</b> {firstname}</p>
      <p><b>Lastname:</b> {lastname}</p>
      <p><b>Gender:</b> {gender}</p>
      <p><b>Hobbies:</b> {hobbies.join(", ")}</p>
      <p><b>Role:</b> {role}</p>
    </div>
  );
}

export default Register;
