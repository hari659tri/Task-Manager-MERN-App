import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/api";
import { showSuccess, showError } from "../utils/toastHelper";

function Register() {

const navigate = useNavigate();

const [form, setForm] = useState({
email: "",
password: ""
});

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const [success, setSuccess] = useState("");

const handleChange = (e) => {
setForm({
...form,
[e.target.name]: e.target.value
});
};

const handleRegister = async (e) => {

e.preventDefault();
setError("");
setSuccess("");

if (!form.email || !form.password) {
setError("Please fill all fields");
return;
}

try {

setLoading(true);

await API.post("/auth/register", form);
showSuccess("Registration successful");
setSuccess("Account created successfully");

setTimeout(() => {
navigate("/");
}, 1500);

} catch (err) {
showError("Registration failed");
setError(err.response?.data?.message || "Registration failed");

} finally {
setLoading(false);
}

};

return (

<div style={containerStyle}>

<form onSubmit={handleRegister} style={cardStyle}>

<h2>Register</h2>

{error && <p style={errorStyle}>{error}</p>}
{success && <p style={successStyle}>{success}</p>}

<input
type="email"
name="email"
placeholder="Email"
value={form.email}
onChange={handleChange}
style={inputStyle}
/>

<input
type="password"
name="password"
placeholder="Password"
value={form.password}
onChange={handleChange}
style={inputStyle}
/>

<button type="submit" style={buttonStyle}>
{loading ? "Creating..." : "Register"}
</button>

<p>
Already have an account? <Link to="/">Login</Link>
</p>

</form>

</div>

);

}

const containerStyle = {
display: "flex",
justifyContent: "center",
alignItems: "center",
height: "100vh",
background: "#f5f5f5"
};

const cardStyle = {
background: "white",
padding: "30px",
borderRadius: "8px",
width: "320px",
boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
display: "flex",
flexDirection: "column",
gap: "10px"
};

const inputStyle = {
padding: "10px",
borderRadius: "4px",
border: "1px solid #ccc"
};

const buttonStyle = {
padding: "10px",
background: "#2196F3",
color: "white",
border: "none",
borderRadius: "4px",
cursor: "pointer"
};

const errorStyle = {
color: "red",
fontSize: "14px"
};

const successStyle = {
color: "green",
fontSize: "14px"
};

export default Register;