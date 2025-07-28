import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Calendar, CheckCircle, Clock, Github, Linkedin } from 'lucide-react';

const StudentTaskManagement = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete Java Assignment', description: 'Implement OOP concepts', deadline: '2025-02-05', status: 'pending', priority: 'high' },
    { id: 2, title: 'Database Design Project', description: 'Design ER diagram for student system', deadline: '2025-02-10', status: 'in-progress', priority: 'medium' },
    { id: 3, title: 'Web Development Quiz', description: 'HTML, CSS, JavaScript quiz preparation', deadline: '2025-02-15', status: 'completed', priority: 'low' },
    { id: 4, title: 'Spring Boot Tutorial', description: 'Complete REST API tutorial', deadline: '2025-02-20', status: 'pending', priority: 'high' }
  ]);

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    deadline: '',
    priority: 'medium'
  });

  const [showAddForm, setShowAddForm] = useState(false);

  const addTask = () => {
    if (newTask.title && newTask.deadline) {
      setTasks([...tasks, {
        id: tasks.length + 1,
        ...newTask,
        status: 'pending'
      }]);
      setNewTask({ title: '', description: '', deadline: '', priority: 'medium' });
      setShowAddForm(false);
    }
  };

  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status } : task
    ));
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'in-progress': return <Clock className="w-5 h-5 text-yellow-400" />;
      default: return <Clock className="w-5 h-5 text-red-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'bg-green-500/20 text-green-300';
      case 'in-progress': return 'bg-yellow-500/20 text-yellow-300';
      default: return 'bg-red-500/20 text-red-300';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-500/20 text-red-300';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300';
      default: return 'bg-green-500/20 text-green-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
          <div className="flex gap-4">
            <a href="https://github.com/Ajithkumar1204" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ajith-kumarma" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-300">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Student Task Management System</h1>
          <p className="text-xl text-white/80">Organize Your Academic Tasks and Deadlines</p>
        </div>

        {/* Add Task Button */}
        <div className="mb-6">
          <button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add New Task
          </button>
        </div>

        {/* Add Task Form */}
        {showAddForm && (
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Add New Task</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white mb-2">Task Title</label>
                <input 
                  type="text"
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  className="w-full p-3 rounded bg-white/20 text-white border border-white/30"
                  placeholder="Enter task title"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Deadline</label>
                <input 
                  type="date"
                  value={newTask.deadline}
                  onChange={(e) => setNewTask({...newTask, deadline: e.target.value})}
                  className="w-full p-3 rounded bg-white/20 text-white border border-white/30"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-white mb-2">Description</label>
                <textarea 
                  value={newTask.description}
                  onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                  className="w-full p-3 rounded bg-white/20 text-white border border-white/30 h-24"
                  placeholder="Enter task description"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Priority</label>
                <select 
                  value={newTask.priority}
                  onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                  className="w-full p-3 rounded bg-white/20 text-white border border-white/30"
                >
                  <option value="low" className="bg-gray-800">Low</option>
                  <option value="medium" className="bg-gray-800">Medium</option>
                  <option value="high" className="bg-gray-800">High</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <button 
                onClick={addTask}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors"
              >
                Add Task
              </button>
              <button 
                onClick={() => setShowAddForm(false)}
                className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Tasks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {tasks.map((task) => (
            <div key={task.id} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-white">{task.title}</h3>
                {getStatusIcon(task.status)}
              </div>
              
              <p className="text-white/80 mb-3">{task.description}</p>
              
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-white/60" />
                <span className="text-white/80 text-sm">{task.deadline}</span>
              </div>
              
              <div className="flex gap-2 mb-4">
                <span className={`px-2 py-1 rounded text-xs ${getStatusColor(task.status)}`}>
                  {task.status.replace('-', ' ')}
                </span>
                <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => updateTaskStatus(task.id, 'in-progress')}
                  className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 text-white text-xs rounded transition-colors"
                >
                  In Progress
                </button>
                <button 
                  onClick={() => updateTaskStatus(task.id, 'completed')}
                  className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded transition-colors"
                >
                  Complete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {['Java', 'Spring Boot', 'MySQL', 'HTML5', 'CSS3', 'REST API'].map((tech) => (
              <div key={tech} className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg text-center">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentTaskManagement;