import '../css/TasksList.css'

function TasksList({tasks, setTasks, newTask, openDetails}) {

    const taskStatus = (task) => {
        if(!task) return '';
        if(task.completed) return 'Completed';
        if(!task.dueDate) return 'Someday';

        const today = new Date();
        const due = new Date(task.dueDate);

        const todayBase = new Date(today.getFullYear(), today.getMonth(), today.getDate())
        const dueBase = new Date(due.getFullYear(), due.getMonth(), due.getDate())

        if (todayBase.getTime() === dueBase.getTime()){
            return 'Today'
        } 
        else if (todayBase.getTime() < dueBase.getTime()){
            return 'Upcoming'
        }
        else{
            return 'Overdue'
        }
    }

    const categories = ['Today', 'Upcoming', 'Someday', 'Overdue', 'Completed']

    const tasksCats = categories.reduce((acc, status)=>{
        acc[status] = tasks.filter((task)=>(taskStatus(task)===status))
        return acc
    },{})

    return(
        <div className="tasks-page">
            <h1 className="page-title">My Tasks</h1>
            <button className="new-task-btn" onClick= {newTask}>+ Add New Task</button>
            <div className="main-div">
            {categories.map(
                (status) => {
                    const tasks = tasksCats[status]
                    if(!tasks.length) return null

                    return(
                        <div key={status}>
                            <h2>{status}</h2>
                            <ul>
                                {tasks.map(
                                    (task)=>(
                                        <li key={task.id} onClick={()=> openDetails(task.id)}>
                                            <input type="checkbox" checked= {task.completed} readOnly/>
                                            <span className={`task-title ${task.completed? 'done':''}`}>{task.taskTitle}</span>
                                            {task.priority && (
                                                <span className={`task-priority ${task.priority.toLowerCase()}`}/>
                                                )}

                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    )
                }
            )}
            </div>
        </div>
    )
}

export default TasksList