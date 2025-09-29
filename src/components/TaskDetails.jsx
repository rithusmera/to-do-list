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
            <h1 className="page-title">Task Details</h1>
            <button className="back-btn" onClick={()=> setPages('tasks')}>Back</button>
            <div className="main-div">
                <h2 className="task-title">{task.taskTitle}</h2>
                <button className="edit-btn" onClick={()=> setPages('editTask')}>Edit</button>
                {task.dueDate? <span className="due-date">Due: {new Date(task.dueDate).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric' 
                })}</span>: null}
                <span className="priority">Priority: {task.priority}</span>
                <p className="task-desc">{task.taskDesc}</p>

                {task.completed? 
                <button className="cmplt-btn" onClick={()=>updateTask(task.id)}>Mark as Incomplete</button>:
                <button className="cmplt-btn" onClick={()=>updateTask(task.id)}>Mark as Complete</button>}

                <button className="delete-btn" onClick={()=>deleteTask(task.id)}>Delete Task</button>
            </div>
            
        </div>
    )

}

export default TaskDetails