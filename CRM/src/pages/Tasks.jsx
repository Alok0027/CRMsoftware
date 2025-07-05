import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiTrash, FiCheck } from 'react-icons/fi';

const initialTasks = [
  { id: 1, text: 'Follow up with Acme Corp regarding the new website proposal.', completed: false },
  { id: 2, text: 'Prepare presentation for the Q3 marketing campaign.', completed: false },
  { id: 3, text: 'Schedule a meeting with Tech Solutions to discuss consulting services.', completed: true },
  { id: 4, text: 'Send software license agreement to Global Inc.', completed: false },
];

const Tasks = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <main className="flex-1 p-6 sm:p-8 bg-gray-100 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Tasks</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex gap-4 mb-6">
            <input 
              type="text" 
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            />
            <button 
              onClick={handleAddTask}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition text-white font-medium shadow-sm hover:shadow-md"
            >
              <FiPlus /> Add Task
            </button>
          </div>

          <div>
            <AnimatePresence>
              {tasks.map(task => (
                <motion.div 
                  key={task.id}
                  layout
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center justify-between p-4 mb-2 rounded-lg border ${task.completed ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}`}
                >
                  <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {task.text}
                  </span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleToggleTask(task.id)} className={`p-2 rounded-full transition ${task.completed ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`}>
                      <FiCheck />
                    </button>
                    <button onClick={() => handleDeleteTask(task.id)} className="p-2 rounded-full hover:bg-red-100 text-red-500 transition">
                      <FiTrash />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tasks;
