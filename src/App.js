// import './App.css';
// import BtnAjout from './composants/composantbtn/BtnAjout';
// import InputSearch from './composants/composantsearch/InputSearch';
// import Table from './composants/composanttable/Table';
// function App() {
//   return (
//     <div className="container">
//       <h1 class="text-4xl font-bold text-center">Todo List</h1>
//       <div className="flex justify-between">
//         <InputSearch />
//         <BtnAjout />
//       </div>
//       <div className=''>
//         <Table />
//       </div>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import React, { useState } from "react";
import BtnAjout from "./composants/composantbtn/BtnAjout";
import InputSearch from "./composants/composantsearch/InputSearch";
import Table from "./composants/composanttable/Table";

function App() {
  const [tasks, setTasks] = useState([
    { title: "Coder", description: "Utiliser une techno" },
    { title: "Déployer", description: "Utiliser Github pour le faire" },
    { title: "Tester", description: "Utiliser les tests unitaires" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [editIndex, setEditIndex] = useState(null);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddOrEditTask = () => {
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
    } else {
      setTasks([...tasks, newTask]);
    }
    setNewTask({ title: "", description: "" });
    setModalVisible(false);
    setEditIndex(null);
  };

  const handleEditTask = (index) => {
    setNewTask(tasks[index]);
    setEditIndex(index);
    setModalVisible(true);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center">Todo List</h1>
      <div className="flex justify-between mt-4">
        <InputSearch setSearchTerm={setSearchTerm} />
        <BtnAjout
          onClick={() => {
            setModalVisible(true);
            setNewTask({ title: "", description: "" });
            setEditIndex(null);
          }}
        />
      </div>
      <Table
        tasks={filteredTasks}
        onEdit={handleEditTask}
        onDelete={handleDeleteTask}
      />
      {modalVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl mb-4">
              {editIndex !== null ? "Modifier une tâche" : "Ajouter une tâche"}
            </h2>
            <input
              type="text"
              placeholder="Titre"
              className="border p-2 mb-2 w-full"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Description"
              className="border p-2 mb-4 w-full"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
            />
            <div className="flex justify-end">
              <button
                className="bg-green-500 text-white py-1 px-4 rounded mr-2"
                onClick={handleAddOrEditTask}
              >
                {editIndex !== null ? "Modifier" : "Ajouter"}
              </button>
              <button
                className="bg-red-500 text-white py-1 px-4 rounded"
                onClick={() => setModalVisible(false)}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
