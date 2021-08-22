import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

const tasksInit = [
  { id: 1, text: "Foo", day: "Jan 1st at 15:00", reminder: true },
  { id: 2, text: "Bar", day: "Feb 2nd at 12:00", reminder: false },
  { id: 3, text: "Baz", day: "May 3rd at 11:00", reminder: true }
];

const App = () => {
  const [tasks, setTasks] = useState(tasksInit);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "Add a new task"
      )}
    </div>
  );
};

export default App;
