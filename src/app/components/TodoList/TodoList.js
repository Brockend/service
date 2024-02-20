"use client";

import { useEffect, useState } from 'react';

import './todoAdd.scss';
import './todoList.scss';

const TodoList = () => {

    const [allTodos, setAllTodos] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [activeTab, setActiveTab] = useState(1);
    const [completedTodos, setCompletedTodos] = useState([]);


    const handleAddClick = () => {
        let newTodoItem = {
            title: title,
            description: description
        }

        let updatedTodoList = [...allTodos];
        updatedTodoList.push(newTodoItem);
        setAllTodos(updatedTodoList);
        setTitle("");
        setDescription("");

        localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
    }

    const handleDeleteClick = (index) => {
        let reducedTodoList = [...allTodos];
        reducedTodoList.splice(index, 1);
        
        localStorage.setItem('todoList', JSON.stringify(reducedTodoList));
        setAllTodos(reducedTodoList);
    }

    const handleDeleteCompletedClick = (index) => {
        let reducedTodoList = [...completedTodos];
        reducedTodoList.splice(index, 1);

        localStorage.setItem('todoCompletedList', JSON.stringify(reducedTodoList));
        setCompletedTodos(reducedTodoList);
    }

    const handleCompleteClick = (index) => {
        const date = new Date();
        const dd = date.getDate();
        let mm = date.getMonth() + 1;
        const yyyy = date.getFullYear();
        const h = date.getHours();
        const m = date.getMinutes();

        mm = mm.toString();

        if (mm.length === 1) {
            mm = `0${mm}`
        }

        const completedOn = `${dd}.${mm}.${yyyy} at ${h}:${m}`;

        const filteredItem = {
            ...allTodos[index],
            completedOn
        }

        let updatedCompletedList = [...completedTodos];
        updatedCompletedList.push(filteredItem);
        setCompletedTodos(updatedCompletedList);
        handleDeleteClick(index);

        localStorage.setItem('todoCompletedList', JSON.stringify(updatedCompletedList));
    }

    const toggleTab = (index) => {
        setActiveTab(index);
        localStorage.setItem('todoTabs', index);
    }

    useEffect(() => {
        let savedData = JSON.parse(localStorage.getItem('todoList'));
        let savedCompletedData = JSON.parse(localStorage.getItem('todoCompletedList'));
        let savedTodoTabsState = localStorage.getItem('todoTabs');

        console.log(savedTodoTabsState);

        if (savedData) {
            setAllTodos(savedData);
        }

        if (savedCompletedData) {
            setCompletedTodos(savedCompletedData);
        }

        setActiveTab(+savedTodoTabsState);
    }, []);

    return (
        <>
            <div className='todoAdd'>
                <div className='todoAdd__wrapper'>
                    <div className="todoAdd__input">
                        <label htmlFor="todoTitle">Title:</label>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} name="todoTitle" id="todoTitle" placeholder='What do you want to do?' />
                    </div>
                    <div className="todoAdd__input">
                        <label htmlFor="todoDesctiption">Description:</label>
                        <input type="text" value={description} onChange={e => setDescription(e.target.value)} name="todoDesctiption" id="todoDesctiption" placeholder='Describe it' />
                    </div>
                    <div className="todoAdd__input">
                        <button type='button' onClick={handleAddClick} className='button'>Add</button>
                    </div>
                </div>
            </div>

            <div className='todoList'>
                <div className="todoList__buttons">
                    <button className={activeTab === 1 ? "button button_active" : "button"} onClick={() => toggleTab(1)}>ToDo</button>
                    <button className={activeTab === 2 ? "button button_active" : "button"} onClick={() => toggleTab(2)}>Completed</button>
                </div>
                <div className={activeTab === 1 ? "todoList__wrapper todoList__wrapper_active" : "todoList__wrapper"}>
                    {allTodos.map((item, index) => (
                        <div className="todoList__item" key={index}>
                            <div className="todoList__name">{item.title}</div>
                            <div className="todoList__description">{item.description}</div>
                            <div className="todoList__actions">
                                <div className='todoList__action' onClick={() => handleDeleteClick(index)}>Delete</div>
                                <div className='todoList__action' onClick={() => handleCompleteClick(index)}>Done</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={activeTab === 2 ? "todoList__wrapper todoList__wrapper_active" : "todoList__wrapper"}>
                    {completedTodos.map((item, index) => (
                        <div className="todoList__item" key={index}>
                            <div className="todoList__name">{item.title}</div>
                            <div className="todoList__description">{item.description}</div>
                            <div className="todoList__time">{item.completedOn}</div>
                            <div className="todoList__actions">
                                <div className='todoList__action' onClick={() => handleDeleteCompletedClick(index)}>Delete</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TodoList;