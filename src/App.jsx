import { useState, useEffect } from 'react'
import './css/App.css'
import TaskForm from './components/TaskForm'
import TasksList from './components/TasksList'
import TaskDetails from './components/taskDetails'
import EditTask from './components/EditTask'

function App() {

  const[pages, setPages] = useState('tasks')
  const[taskid, setTaskid] = useState('')

  const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem('tasks');
  return saved ? JSON.parse(saved) : [];
  });

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])
  
  const addTask = (taskData)=>{
    setTasks(prev=> [...prev, {id: Date.now(), completed: false, ...taskData}]);
    setPages('tasks')
  }

  return (
    <>
    <div className='app'>
      {pages === 'tasks' &&
      (
        <TasksList tasks= {tasks}
        setTasks={setTasks}
        newTask = {()=> setPages('createTask')}
        openDetails={(taskid)=> {
          setTaskid(taskid)
          setPages('taskDetails')
          }}
        />
      )}

      {pages === 'createTask' &&
      (
        <TaskForm onSave= {addTask}
        onCancel = {() => setPages('tasks')}
        />
      )}

      {pages === 'taskDetails' &&
      (
        <TaskDetails tasks = {tasks}
        setTasks={setTasks}
        taskid = {taskid}
        setPages= {setPages}
        />
      )}

      {pages === 'editTask' &&
      (
        <EditTask tasks={tasks}
        setTasks={setTasks}
        taskid= {taskid}
        onSave={()=> setPages('tasks')}
        onCancel={()=>setPages('tasks')}/>
      )}

    </div>
    </>
  )
}

export default App
