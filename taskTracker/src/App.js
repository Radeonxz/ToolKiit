import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const tasksInit = [
  { id: 1, text: "Foo", day: "Jan 1st at 15:00", reminder: true },
  { id: 2, text: "Bar", day: "Feb 2nd at 12:00", reminder: false },
  { id: 3, text: "Baz", day: "May 3rd at 11:00", reminder: true }
];

const App = () => {
  const [tasks, setTasks] = useState(tasksInit);

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      taks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Add a new task"
      )}
    </div>
  );
};

export default App;
