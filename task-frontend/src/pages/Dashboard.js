import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard() {

const navigate = useNavigate();
const [refreshTasks, setRefreshTasks] = useState(false);

useEffect(() => {
const token = localStorage.getItem("token");

if (!token) {
navigate("/");
}
}, [navigate]);

// refresh trigger
const handleTaskCreated = () => {
setRefreshTasks(prev => !prev);
};

const logout = () => {
localStorage.removeItem("token");
navigate("/");
};

return (

<div style={containerStyle}>

<div style={headerStyle}>
<h2>Task Manager Dashboard</h2>

<button onClick={logout} style={logoutButton}>
Logout
</button>
</div>

<div style={contentStyle}>

<TaskForm onTaskCreated={handleTaskCreated} />

<hr style={{ margin: "20px 0" }} />

<TaskList refresh={refreshTasks} />

</div>

</div>

);

}

const containerStyle = {
maxWidth: "700px",
margin: "40px auto",
fontFamily: "Arial"
};

const headerStyle = {
display: "flex",
justifyContent: "space-between",
alignItems: "center"
};

const logoutButton = {
padding: "8px 14px",
background: "#ff4d4d",
color: "white",
border: "none",
borderRadius: "4px",
cursor: "pointer"
};

const contentStyle = {
marginTop: "20px"
};

export default Dashboard;