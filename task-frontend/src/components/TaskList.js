import { useEffect, useState } from "react";
import API from "../api/api";

function TaskList({ refresh }) {

const [tasks, setTasks] = useState([]);
const token = localStorage.getItem("token");

const getTasks = async () => {
try {

const res = await API.get("/tasks", {
headers: {
Authorization: `Bearer ${token}`
}
});

setTasks(res.data);

} catch (error) {
console.error("Error fetching tasks:", error);
}
};

useEffect(() => {
getTasks();
}, [refresh]);

const deleteTask = async (id) => {

if (!window.confirm("Delete this task?")) return;

try {

await API.delete(`/tasks/${id}`, {
headers: { Authorization: `Bearer ${token}` }
});

setTasks(tasks.filter((task) => task._id !== id));

} catch (error) {
console.error("Error deleting task:", error);
}

};

const updateTask = async (id, oldTitle) => {

const newTitle = prompt("Edit task title", oldTitle);

if (!newTitle) return;

try {

await API.put(
`/tasks/${id}`,
{ title: newTitle },
{
headers: { Authorization: `Bearer ${token}` }
}
);

setTasks(
tasks.map((task) =>
task._id === id ? { ...task, title: newTitle } : task
)
);

} catch (error) {
console.error("Error updating task:", error);
}

};

return (

<div>

<h3>All Tasks</h3>

{tasks.length === 0 ? (
<p>No tasks available</p>
) : (
tasks.map((task) => (

<div
key={task._id}
style={{
border: "1px solid #ddd",
padding: "12px",
marginBottom: "10px",
borderRadius: "6px",
background: "#fafafa"
}}
>

<h4>{task.title}</h4>
<p>{task.description}</p>

<div style={{ marginTop: "10px" }}>

<button
onClick={() => updateTask(task._id, task.title)}
style={{
marginRight: "10px",
padding: "6px 10px",
background: "#4CAF50",
color: "#fff",
border: "none",
borderRadius: "4px",
cursor: "pointer"
}}
>
Edit
</button>

<button
onClick={() => deleteTask(task._id)}
style={{
padding: "6px 10px",
background: "#ff4d4d",
color: "#fff",
border: "none",
borderRadius: "4px",
cursor: "pointer"
}}
>
Delete
</button>

</div>

</div>

))
)}

</div>

);

}

export default TaskList;