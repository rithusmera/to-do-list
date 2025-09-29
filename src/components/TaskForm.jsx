import { useState } from "react"
import '../css/TaskForm.css'

function TaskForm({onSave, onCancel}){

    const [taskTitle, setTaskTitle]= useState('')
    const [taskDesc, setTaskDesc]= useState('')
    const [dueDate, setDueDate]= useState('')
    const [priority, setPriority]= useState('Low')

    const handleSubmit = () => {
        if(taskTitle.trim()){
            onSave({taskTitle, taskDesc, dueDate, priority})
        }
    }

    return(
        <div className="task-form-container">
            <div className="form-header">
                <h1 className="form-title">Create New Task</h1>
            </div>
            
            <div className="task-form">
                    <h4>Task Title</h4>
                    <input type="text"
                    className="title-input"
                    placeholder="e.g. Design the new dashboard"
                    value = {taskTitle}
                    onChange={(e)=>setTaskTitle(e.target.value)} />

                    <h4>Description</h4>
                    <textarea
                    className="desc-input"
                    placeholder="Add more details about the task..."
                    value = {taskDesc}
                    onChange={(e)=>setTaskDesc(e.target.value)} />

                    <div className="form-row">
                        <div className="date-col">
                            <h4>Due Date</h4>
                            <input type="date"
                            className="date-input"
                            value={dueDate}
                            onChange={(e)=> setDueDate(e.target.value)} />
                        </div>

                        <div className="priority-col">
                            <h4>Priority</h4>
                            <select className="priority-input" value={priority} onChange={(e)=>setPriority(e.target.value)}>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                    </div>


                    <div className="form-actions">
                        <button className="save-btn" type="button" onClick={()=> handleSubmit()}>Save Task</button>
                        <button className="cancel-btn" type="button" onClick={onCancel}>Cancel</button>
                    </div>
            </div>
        </div>
    )
}

export default TaskForm;