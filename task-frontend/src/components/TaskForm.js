import { useState } from "react";
import API from "../api/api";
import { showSuccess, showError } from "../utils/toastHelper";

function TaskForm({ onTaskCreated }) {

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [loading, setLoading] = useState(false);

const createTask = async (e) => {

e.preventDefault();

if (!title.trim() || !description.trim()) {
alert("Please fill all fields");
return;
}

try {

setLoading(true);

const token = localStorage.getItem("token");

await API.post(
"/tasks",
{ title, description },
{
headers: {
Authorization: `Bearer ${token}`
}
}
);
showSuccess("Task created successfully");
setTitle("");
setDescription("");

if (onTaskCreated) onTaskCreated();

}
catch (error) {
showError("Failed to create task");
console.error("Task creation failed:", error);
alert("Failed to create task");

}
finally {
setLoading(false);
}

};

return (

<div style={{ marginBottom: "20px" }}>

<h3>Create Task</h3>

<form onSubmit={createTask}>

<input
type="text"
placeholder="Title"
value={title}
onChange={(e) => setTitle(e.target.value)}
style={{
marginRight: "10px",
padding: "8px",
borderRadius: "4px",
border: "1px solid #ccc"
}}
/>

<input
type="text"
placeholder="Description"
value={description}
onChange={(e) => setDescription(e.target.value)}
style={{
marginRight: "10px",
padding: "8px",
borderRadius: "4px",
border: "1px solid #ccc"
}}
/>

<button
type="submit"
disabled={loading}
style={{
padding: "8px 14px",
background: "#007bff",
color: "white",
border: "none",
borderRadius: "4px",
cursor: "pointer"
}}
>
{loading ? "Creating..." : "Create Task"}
</button>

</form>

</div>

);

}

export default TaskForm;