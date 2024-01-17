import Card from "./card.jsx";
import Button from "./Button.jsx";
import Input from "./Input.jsx";
import {useEffect, useState} from "react";

export default function Todo() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },[tasks]);

    function handleAddTask(e) {
        e.preventDefault();
        setTasks(prevTasks => [...prevTasks, {
            id: Math.floor(Math.random() * Date.now()),
            name: newTask,
            completed:false,
        }]);
        setNewTask('');

    }

    function handleCompleted(id){
        const updateTask = tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed,
                }
            }
            return task;
        });
        setTasks(updateTask);
    }

    function handleRemove(id) {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    }
    return (
        <>
            <div className={'items-center text-center p-4 mb-10'}>
                <h1 className={'text-violet-50 text-4xl font-bold '}>Todo List App</h1>
            </div>
        <Card>
            <Card.Header>Your Todo</Card.Header>
            <Card.Body>
                <form>
                    <div className="flex items-center gap-x-2">
                        <Input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder={'do you have a todo?'}/>
                        <Button onClick={handleAddTask}>Add Task</Button>
                    </div>
                </form>
                {tasks.length > 0 ?
                    <ol className={'space-y-2 mt-4'}>
                        {tasks.map((task => (
                                <li key={task.id} className={'flex items-center justify-between'}>
                                    <span>{task.name} {task.completed ? '✅' : '❌'}</span>

                                    <div className={'flex items-center gap-x-2'}>
                                        <button onClick={() => handleCompleted(task.id)} className={'px-2 py-1 border text-xs  rounded-lg'}>{task.completed ? 'Incompleted' : 'Completed'}</button>
                                        <button onClick={() => handleRemove(task.id)} className={'px-2 py-1 border text-xs rounded-lg'}>remove</button>
                                    </div>
                                </li>
                            ))
                        )}
                    </ol>
                    : null}
            </Card.Body>
            <Card.Footer>
                Todo {tasks.length} Completed: {tasks.filter(task => task.completed).length}
            </Card.Footer>
        </Card>
        </>
    )
}