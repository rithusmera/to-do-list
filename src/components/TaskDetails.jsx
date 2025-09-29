import { FaEdit, FaCalendarAlt, FaFlag, FaCheckCircle, FaTrashAlt } from "react-icons/fa";
import '../css/TaskDetails.css'

function TaskDetails({tasks, setTasks, taskid, setPages}){

    const task = tasks.find((t) => t.id === taskid);

    const updateTask = (id)=> {
        setTasks(
            prev=>(
                prev.map((task)=>(
                    task.id === id? {...task, completed: !task.completed}: task
                )
                )
            )
        )
        setPages('tasks')
    }
    const deleteTask = (id)=> {
        setTasks(prev=>(
            prev.filter((task)=> task.id !== id)
        ))
        setPages('tasks')
    }

    if (!task) return (<p>Task not found</p>);

    return (
        <div className="task-details">

            <div className="details-pg-header">
                <h1 className="details-pg-title">Task Details</h1>
                <button className="back-btn" onClick={()=> setPages('tasks')}>Back</button>
            </div>

            <div className="details-card">

                <div className="card-header">
                    <h2 className="task-title">{task.taskTitle}</h2>
                    <button className="edit-btn" onClick={()=> setPages('editTask')}>
                        <FaEdit /> Edit
                    </button>
                </div>

                <div className="task-meta">
                    {task.dueDate? <span className="due-date">
                        <FaCalendarAlt />{" "}Due: {new Date(task.dueDate).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric' 
                    })}</span>: null}
                    <span className="priority"> <FaFlag />{' '}Priority: {task.priority}</span>
                </div>

                <p className="task-desc">{task.taskDesc}</p>

                <div className="task-actions">
                {task.completed? 
                    <button className="cmplt-btn" onClick={()=>updateTask(task.id)}><FaCheckCircle /> {' '}Mark as Incomplete</button>:
                    <button className="cmplt-btn" onClick={()=>updateTask(task.id)}><FaCheckCircle /> {' '}Mark as Complete</button>}

                    <button className="delete-btn" onClick={()=>deleteTask(task.id)}><FaTrashAlt />{' '}Delete Task</button>
                </div>
            </div>
        </div>
    )

}

export default TaskDetails