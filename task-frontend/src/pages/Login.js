import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/api";
import { showSuccess, showError } from "../utils/toastHelper";

function Login() {

const navigate = useNavigate();

const [form, setForm] = useState({
email: "",
password: ""
});

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const handleChange = (e) => {
setForm({
...form,
[e.target.name]: e.target.value
});
};

const handleLogin = async (e) => {

e.preventDefault();
setError("");

if (!form.email || !form.password) {
setError("Please fill all fields");
return;
}

try {

setLoading(true);

const res = await API.post("/auth/login", form);

localStorage.setItem("token", res.data.token);
showSuccess("Login successful");

navigate("/dashboard");

} catch (err) {
showError("Invalid email or password");
setError(err.response?.data?.message || "Login failed");

} finally {
setLoading(false);
}

};

return (

<div style={containerStyle}>

<form onSubmit={handleLogin} style={cardStyle}>

<h2>Login</h2>

{error && <p style={errorStyle}>{error}</p>}

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
{loading ? "Logging in..." : "Login"}
</button>

<p>
Don't have an account? <Link to="/register">Register</Link>
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
background: "#4CAF50",
color: "white",
border: "none",
borderRadius: "4px",
cursor: "pointer"
};

const errorStyle = {
color: "red",
fontSize: "14px"
};

export default Login;