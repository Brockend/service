"use client";

import { useState } from 'react';

import AddTodoModal from '../AddTodoModal/AddTodoModal';
import TodoList from '../TodoList/TodoList';

import './todoBase.scss';

const TodoBase = (props) => {

    const date = new Date();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const todayDayName = dayNames[date.getDay()];
    const todayMonthName = monthNames[date.getMonth()];

    const [isActiveModal, setActiveModal] = useState(false);

    const handleAdd = () => {
        setActiveModal(true);
    }

    return (
        <>
            <div className='todoBase'>
                <h2 className="todoBase__today">{props.title}</h2>
                {props.title === "Today" ? 
                    <h3 className='todoBase__date'>{todayDayName}, {date.getDate()} {todayMonthName}</h3> : null
                }
                <TodoList/>
                <button className='todoBase__addBtn' onClick={handleAdd}><span>+</span> Add Task</button>
            </div>
            {/* {isActiveModal ? <AddTodoModal isActive/> : null} */}
        </>
    )
}

export default TodoBase;