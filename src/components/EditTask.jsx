function EditTask({tasks, setTasks, taskid, onSave, onCancel}){

    const task = tasks.find((task)=>task.id === taskid)

    const updateTask = (id, updates)=> {
        setTasks(
            (prev =>
                prev.map ((task) =>
                    (task.id === id? {...task, ...updates}: task
                    )
                )
            )
        )
    }
    

    return(
        <>
            <h1 className="page-title">Edit Task</h1>
            <button className="cancel-btn" onClick={onCancel}>Cancel</button>
            <div className="main-div">
                <h4>Task Title</h4>
                <input type="text" value={task.taskTitle} onChange={(e)=> updateTask(task.id, {taskTitle: e.target.value})}/>
                <h4>Task Description</h4>
                <input type="text" value={task.taskDesc} onChange={(e)=> updateTask(task.id, {taskDesc: e.target.value})}/>
                <h4>Due Date</h4>
                <input type="date" value={task.dueDate} onChange={(e)=> updateTask(task.id, {dueDate: e.target.value})}/>
                <h4>Priority</h4>
                <select value={task.priority} onChange={(e)=> updateTask(task.id, {priority: e.target.value})}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <button className="save-btn" onClick={onSave}>Save Changes</button>
            </div>
        </>
    )
}

export default EditTask;