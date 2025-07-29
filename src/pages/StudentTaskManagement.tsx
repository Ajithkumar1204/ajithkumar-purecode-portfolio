import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Calendar, CheckCircle, Clock, Github, Linkedin, BookOpen, Target, TrendingUp, User, Bell, Search, Filter, MoreVertical } from 'lucide-react';

const StudentTaskManagement = () => {
  const [tasks, setTasks] = useState([
    { 
      id: 1, 
      title: 'Complete Java Assignment', 
      description: 'Implement OOP concepts including inheritance, polymorphism, and encapsulation', 
      deadline: '2025-02-05', 
      status: 'pending', 
      priority: 'high',
      subject: 'Programming',
      estimatedHours: 8,
      completedHours: 0,
      tags: ['Java', 'OOP', 'Assignment'],
      createdAt: '2025-01-28'
    },
    { 
      id: 2, 
      title: 'Database Design Project', 
      description: 'Design comprehensive ER diagram for student management system with normalization', 
      deadline: '2025-02-10', 
      status: 'in-progress', 
      priority: 'medium',
      subject: 'Database',
      estimatedHours: 12,
      completedHours: 6,
      tags: ['MySQL', 'ER Diagram', 'Normalization'],
      createdAt: '2025-01-25'
    },
    { 
      id: 3, 
      title: 'Web Development Quiz', 
      description: 'Comprehensive quiz covering HTML5, CSS3, JavaScript ES6, and responsive design', 
      deadline: '2025-02-15', 
      status: 'completed', 
      priority: 'low',
      subject: 'Web Development',
      estimatedHours: 4,
      completedHours: 4,
      tags: ['HTML', 'CSS', 'JavaScript'],
      createdAt: '2025-01-20'
    },
    { 
      id: 4, 
      title: 'Spring Boot Tutorial', 
      description: 'Complete comprehensive REST API tutorial with authentication and database integration', 
      deadline: '2025-02-20', 
      status: 'pending', 
      priority: 'high',
      subject: 'Backend Development',
      estimatedHours: 16,
      completedHours: 0,
      tags: ['Spring Boot', 'REST API', 'Authentication'],
      createdAt: '2025-01-30'
    },
    { 
      id: 5, 
      title: 'React Frontend Project', 
      description: 'Build responsive student dashboard with React hooks and context API', 
      deadline: '2025-02-25', 
      status: 'in-progress', 
      priority: 'medium',
      subject: 'Frontend Development',
      estimatedHours: 20,
      completedHours: 8,
      tags: ['React', 'Hooks', 'Context API'],
      createdAt: '2025-01-22'
    },
    { 
      id: 6, 
      title: 'Algorithm Practice', 
      description: 'Solve 50 coding problems covering sorting, searching, and dynamic programming', 
      deadline: '2025-03-01', 
      status: 'pending', 
      priority: 'medium',
      subject: 'Data Structures',
      estimatedHours: 25,
      completedHours: 0,
      tags: ['Algorithms', 'Coding', 'Problem Solving'],
      createdAt: '2025-01-28'
    }
  ]);

  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    deadline: '',
    priority: 'medium',
    subject: '',
    estimatedHours: 1,
    tags: []
  });

  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [notifications] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const addTask = () => {
    if (newTask.title && newTask.deadline) {
      setTasks([...tasks, {
        id: Math.max(...tasks.map(t => t.id)) + 1,
        ...newTask,
        status: 'pending',
        completedHours: 0,
        createdAt: new Date().toISOString().split('T')[0],
        tags: newTask.tags || []
      }]);
      setNewTask({ 
        title: '', 
        description: '', 
        deadline: '', 
        priority: 'medium',
        subject: '',
        estimatedHours: 1,
        tags: []
      });
      setShowAddForm(false);
    }
  };

  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map(task => 
      task.id === id ? { 
        ...task, 
        status,
        completedHours: status === 'completed' ? task.estimatedHours : task.completedHours
      } : task
    ));
  };

  const updateTaskProgress = (id, hours) => {
    setTasks(tasks.map(task => 
      task.id === id ? { 
        ...task, 
        completedHours: Math.min(hours, task.estimatedHours),
        status: hours >= task.estimatedHours ? 'completed' : hours > 0 ? 'in-progress' : 'pending'
      } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || task.priority === filterPriority;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getProgressPercentage = (task) => {
    return Math.round((task.completedHours / task.estimatedHours) * 100);
  };

  const getDaysUntilDeadline = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getTaskStats = () => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.status === 'completed').length;
    const inProgress = tasks.filter(t => t.status === 'in-progress').length;
    const pending = tasks.filter(t => t.status === 'pending').length;
    const overdue = tasks.filter(t => getDaysUntilDeadline(t.deadline) < 0 && t.status !== 'completed').length;
    
    return { total, completed, inProgress, pending, overdue };
  };

  const stats = getTaskStats();

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
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            TaskMaster Pro
          </h1>
          <p className="text-xl text-white/80 mb-6">Your Complete Academic Task Management Solution</p>
          <div className="flex justify-center items-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>{stats.total} Tasks</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              <span>{stats.completed} Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>{Math.round((stats.completed / stats.total) * 100)}% Success Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              <span>{notifications} Notifications</span>
            </div>
          </div>
        </div>

        {/* Dashboard Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-white mb-2">{stats.total}</div>
            <div className="text-white/70 text-sm">Total Tasks</div>
          </div>
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">{stats.completed}</div>
            <div className="text-white/70 text-sm">Completed</div>
          </div>
          <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.inProgress}</div>
            <div className="text-white/70 text-sm">In Progress</div>
          </div>
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">{stats.pending}</div>
            <div className="text-white/70 text-sm">Pending</div>
          </div>
          <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">{stats.overdue}</div>
            <div className="text-white/70 text-sm">Overdue</div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-white/60" />
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-3 w-5 h-5 text-white/60" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="all" className="bg-gray-800">All Status</option>
                <option value="pending" className="bg-gray-800">Pending</option>
                <option value="in-progress" className="bg-gray-800">In Progress</option>
                <option value="completed" className="bg-gray-800">Completed</option>
              </select>
            </div>
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all" className="bg-gray-800">All Priorities</option>
              <option value="high" className="bg-gray-800">High Priority</option>
              <option value="medium" className="bg-gray-800">Medium Priority</option>
              <option value="low" className="bg-gray-800">Low Priority</option>
            </select>
            <button 
              onClick={() => setShowAddForm(!showAddForm)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all font-medium"
            >
              <Plus className="w-5 h-5" />
              Add Task
            </button>
          </div>
        </div>


        {/* Add Task Form */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Create New Task</h2>
                <button 
                  onClick={() => setShowAddForm(false)}
                  className="text-white/60 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white mb-2 font-medium">Task Title</label>
                    <input 
                      type="text"
                      value={newTask.title}
                      onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                      className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter task title"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">Subject</label>
                    <input 
                      type="text"
                      value={newTask.subject}
                      onChange={(e) => setNewTask({...newTask, subject: e.target.value})}
                      className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="e.g., Programming, Database"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white mb-2 font-medium">Description</label>
                  <textarea 
                    value={newTask.description}
                    onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                    className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Detailed description of the task"
                  />
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-white mb-2 font-medium">Deadline</label>
                    <input 
                      type="date"
                      value={newTask.deadline}
                      onChange={(e) => setNewTask({...newTask, deadline: e.target.value})}
                      className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">Priority</label>
                    <select 
                      value={newTask.priority}
                      onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                      className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="low" className="bg-gray-800">Low Priority</option>
                      <option value="medium" className="bg-gray-800">Medium Priority</option>
                      <option value="high" className="bg-gray-800">High Priority</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white mb-2 font-medium">Estimated Hours</label>
                    <input 
                      type="number"
                      min="1"
                      max="100"
                      value={newTask.estimatedHours}
                      onChange={(e) => setNewTask({...newTask, estimatedHours: parseInt(e.target.value) || 1})}
                      className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={addTask}
                    className="flex-1 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-lg transition-all font-medium"
                  >
                    Create Task
                  </button>
                  <button 
                    onClick={() => setShowAddForm(false)}
                    className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tasks Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {filteredTasks.map((task) => {
            const daysLeft = getDaysUntilDeadline(task.deadline);
            const progress = getProgressPercentage(task);
            
            return (
              <div key={task.id} className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-2 mb-1">
                      {task.title}
                    </h3>
                    <span className="text-sm text-purple-300 bg-purple-500/20 px-2 py-1 rounded-full">
                      {task.subject}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(task.status)}
                    <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/20 rounded transition-all">
                      <MoreVertical className="w-4 h-4 text-white/60" />
                    </button>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-white/80 mb-4 text-sm line-clamp-2">{task.description}</p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/70">Progress</span>
                    <span className="text-white">{progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-white/60 mt-1">
                    <span>{task.completedHours}h completed</span>
                    <span>{task.estimatedHours}h total</span>
                  </div>
                </div>
                
                {/* Deadline and Priority */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white/60" />
                    <span className={`text-sm ${daysLeft < 0 ? 'text-red-400' : daysLeft <= 3 ? 'text-yellow-400' : 'text-white/80'}`}>
                      {daysLeft < 0 ? `${Math.abs(daysLeft)} days overdue` : 
                       daysLeft === 0 ? 'Due today' : 
                       `${daysLeft} days left`}
                    </span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                    {task.priority} priority
                  </span>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {task.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                  {task.tags.length > 3 && (
                    <span className="text-xs bg-white/20 text-white/60 px-2 py-1 rounded">
                      +{task.tags.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Status Badge */}
                <div className="mb-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(task.status)}`}>
                    {task.status === 'completed' && <CheckCircle className="w-4 h-4" />}
                    {task.status === 'in-progress' && <Clock className="w-4 h-4" />}
                    {task.status === 'pending' && <Clock className="w-4 h-4" />}
                    {task.status.replace('-', ' ')}
                  </span>
                </div>
                
                {/* Actions */}
                <div className="flex gap-2">
                  {task.status !== 'completed' && (
                    <>
                      <button 
                        onClick={() => updateTaskStatus(task.id, 'in-progress')}
                        className="flex-1 py-2 bg-yellow-600/80 hover:bg-yellow-600 text-white text-sm rounded-lg transition-colors font-medium"
                      >
                        Start
                      </button>
                      <button 
                        onClick={() => updateTaskStatus(task.id, 'completed')}
                        className="flex-1 py-2 bg-green-600/80 hover:bg-green-600 text-white text-sm rounded-lg transition-colors font-medium"
                      >
                        Complete
                      </button>
                    </>
                  )}
                  {task.status === 'completed' && (
                    <button 
                      onClick={() => updateTaskStatus(task.id, 'pending')}
                      className="w-full py-2 bg-purple-600/80 hover:bg-purple-600 text-white text-sm rounded-lg transition-colors font-medium"
                    >
                      Reopen Task
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Java', desc: 'Backend Logic' },
              { name: 'Spring Boot', desc: 'Framework' },
              { name: 'MySQL', desc: 'Database' },
              { name: 'HTML5', desc: 'Structure' },
              { name: 'CSS3', desc: 'Styling' },
              { name: 'REST API', desc: 'Web Services' }
            ].map((tech) => (
              <div key={tech.name} className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-center p-4 rounded-xl border border-white/20 hover:scale-105 transition-transform">
                <div className="text-purple-300 font-semibold mb-1">{tech.name}</div>
                <div className="text-white/60 text-sm">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentTaskManagement;