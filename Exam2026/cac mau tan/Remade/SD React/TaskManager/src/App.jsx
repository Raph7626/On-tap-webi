import { useMemo, useState } from 'react';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';
import TaskStats from './components/TaskStats.jsx';

const initialTasks = [
  { name: 'Go to gym', priority: 'high', status: 'todo' },
  { name: 'Read a book', priority: 'low', status: 'done' },
  { name: 'Go to market', priority: 'medium', status: 'inprogress' },
  { name: 'Prepare presentation', priority: 'high', status: 'todo' },
  { name: 'Pay electricity bill', priority: 'low', status: 'done' }
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  const stats = useMemo(() => {
    return tasks.reduce(
      (acc, task) => {
        acc.total += 1;
        if (task.status === 'todo') acc.todo += 1;
        if (task.status === 'inprogress') acc.inprogress += 1;
        if (task.status === 'done') acc.done += 1;
        return acc;
      },
      { total: 0, todo: 0, inprogress: 0, done: 0 }
    );
  }, [tasks]);

  const handleAdd = () => {
    setSelectedTask(null);
    setFormVisible(true);
  };

  const handleSave = (task) => {
    if (selectedTask !== null) {
      setTasks((prev) => prev.map((item, index) => (index === selectedTask ? task : item)));
    } else {
      setTasks((prev) => [...prev, task]);
    }
    setFormVisible(false);
  };

  const handleEdit = (index) => {
    setSelectedTask(index);
    setFormVisible(true);
  };

  const handleDelete = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="page shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">Ứng dụng học React</p>
          <h1>Quản lý nhiệm vụ</h1>
          <p className="subtitle">Giao diện đơn giản với React component, thêm sửa xóa và thống kê.</p>
        </div>
        <button className="btn primary" onClick={handleAdd}>
          Thêm việc mới
        </button>
      </header>

      <div className="stat-row">
        <TaskStats label="Tổng việc" value={stats.total} />
        <TaskStats label="Cần làm" value={stats.todo} />
        <TaskStats label="Đang làm" value={stats.inprogress} />
        <TaskStats label="Hoàn thành" value={stats.done} />
      </div>

      <section className="content-box">
        <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
      </section>

      {formVisible && (
        <TaskForm
          initialTask={selectedTask !== null ? tasks[selectedTask] : null}
          onCancel={() => setFormVisible(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default App;
