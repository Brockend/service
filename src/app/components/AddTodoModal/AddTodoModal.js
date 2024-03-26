'use client';

import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './addTodoModal.scss';

import calendar from '../../assets/icons/calendar.svg'

const AddTodoModal = (props) => {

    const categories = [
        { name: "Personal" },
        { name: "Work" },
        { name: "Study" },
        { name: "Health" },
        { name: "Finance" },
        { name: "Other" }
    ]

    const [startDate, setStartDate] = useState(new Date());

    const onSubmit = () => {

    }

    return (
        <section className='addTodoModal'>
            <div className="addTodoModal__content">
                <div className='addTodoModal__top'>
                    <div></div>
                    <h2 className='addTodoModal__title'>Create new Task</h2>
                    <div className='addTodoModal__close'>&#10006;</div>
                </div>
                <form onSubmit={onSubmit} className='addTodoModal__form'>
                    <div className="addTodoModal__item">
                        <label htmlFor="name" className='addTodoModal__label'>Task Name</label>
                        <input type="text" name='name' placeholder='Example' />
                    </div>
                    <div className="addTodoModal__item">
                        <label className='addTodoModal__label'>Category</label>
                        <ul className='addTodoModal__categories'>
                            {categories.map((category) => {
                                return (
                                    <li className='addTodoModal__category' key={category.name}>
                                        <input type="radio" name='category' id={category.name} value={category.name} className='addTodoModal__radio' />
                                        <label htmlFor={category.name}>{category.name}</label>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="addTodoModal__item">
                        <label htmlFor="date-time" className='addTodoModal__label'>Date & Time</label>
                        <DatePicker
                            showIcon
                            className="addTodoModal__date"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            icon={
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.650635 4.33333H11.2091M8.86276 6.55633L2.99696 6.55556M4.9522 8.77806L2.99696 8.77778M2.99696 1V2.11111M8.86276 1V2.11111M2.52769 11H9.33202C9.98905 11 10.3176 11 10.5685 10.8789C10.7893 10.7724 10.9688 10.6024 11.0812 10.3933C11.2091 10.1557 11.2091 9.8445 11.2091 9.22222V3.88889C11.2091 3.26661 11.2091 2.95547 11.0812 2.71779C10.9688 2.50872 10.7893 2.33874 10.5685 2.23222C10.3176 2.11111 9.98905 2.11111 9.33202 2.11111H2.52769C1.87066 2.11111 1.54214 2.11111 1.29119 2.23222C1.07044 2.33874 0.890974 2.50872 0.778503 2.71779C0.650635 2.95547 0.650635 3.26661 0.650635 3.88889V9.22222C0.650635 9.8445 0.650635 10.1557 0.778503 10.3933C0.890974 10.6024 1.07044 10.7724 1.29119 10.8789C1.54214 11 1.87066 11 2.52769 11Z"
                                        stroke="#777777" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            }
                        />
                    </div>
                    <button type='submit' className='addTodoModal__saveBtn'>Save</button>
                </form>

            </div>
        </section>
    )
}

export default AddTodoModal;