import '../css/EditTask.css'

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
        <div className="edit-page">

            <div className="edit-pg-header">
                <h1 className="edit-pg-title">Edit Task</h1>
            </div>

            <div className="edit-form">
                <h4>Task Title</h4>
                <input type="text" 
                className="edit-title"
                value={task.taskTitle} 
                onChange={(e)=> updateTask(task.id, {taskTitle: e.target.value})}/>

                <h4>Description</h4>
                <input type="text" 
                className="edit-desc"
                value={task.taskDesc} 
                onChange={(e)=> updateTask(task.id, {taskDesc: e.target.value})}/>

                <div className="edit-row">
                    <div className="edit-date-col">    
                        <h4>Due Date</h4>
                        <input type="date" 
                        className="edit-date"
                        value={task.dueDate} 
                        onChange={(e)=> updateTask(task.id, {dueDate: e.target.value})}/>
                    </div>

                    <div className="edit-prio-col">
                        <h4>Priority</h4>
                        <select className="edit-priority" value={task.priority} onChange={(e)=> updateTask(task.id, {priority: e.target.value})}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                </div>

                <div className="edit-actions">
                    <button className="save-btn" onClick={onSave}>Save Changes</button>
                    <button className="cancel-btn" onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default EditTask;