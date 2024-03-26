// "use client";

import Image from 'next/image';
import './todoList.scss';

import time from '../../assets/icons/time.svg';
import calendar from '../../assets/icons/calendar.svg';
import edit from '../../assets/icons/edit.svg';
import flag from '../../assets/icons/flag.svg';
import flagEmpty from '../../assets/icons/flag-empty.svg';

const TodoList = () => {

    return (
        <div className='todoList'>
            <div className="todoList__item item-todo">
                <div className='item-todo__info'>
                    <div className="item-todo__name">School meeting</div>
                    <div className="item-todo__details">
                        <div className="item-todo__time"><Image src={time} alt="time"/> 8:20</div>
                        <div className="item-todo__divider"></div>
                        <div className="item-todo__date"><Image src={calendar} alt="calendar"/> 8 Mar</div>
                        <div className="item-todo__divider"></div>
                        <div className="item-todo__category">WORK</div>
                    </div>
                </div>
                <div className="item-todo__actions">
                    <button className="item-todo__edit">
                        <Image src={edit} alt='edit'/>
                    </button>
                    <button className="item-todo__flag">
                        <Image src={flag} alt='flag'/>
                    </button>
                </div>
            </div>
            <div className="todoList__item item-todo">
                <div className='item-todo__info'>
                    <div className="item-todo__name">School meeting</div>
                    <div className="item-todo__details">
                        <div className="item-todo__time"><Image src={time} alt="time"/> 8:20</div>
                        <div className="item-todo__divider"></div>
                        <div className="item-todo__date"><Image src={calendar} alt="calendar"/> 8 Mar</div>
                        <div className="item-todo__divider"></div>
                        <div className="item-todo__category">WORK</div>
                    </div>
                </div>
                <div className="item-todo__actions">
                    <button className="item-todo__edit">
                        <Image src={edit} alt='edit'/>
                    </button>
                    <button className="item-todo__flag">
                        <Image src={flagEmpty} alt='flag'/>
                    </button>
                </div>
            </div>
            <div className="todoList__item item-todo">
                <div className='item-todo__info'>
                    <div className="item-todo__name">School meeting</div>
                    <div className="item-todo__details">
                        <div className="item-todo__time"><Image src={time} alt="time"/> 8:20</div>
                        <div className="item-todo__divider"></div>
                        <div className="item-todo__date"><Image src={calendar} alt="calendar"/> 8 Mar</div>
                        <div className="item-todo__divider"></div>
                        <div className="item-todo__category">WORK</div>
                    </div>
                </div>
                <div className="item-todo__actions">
                    <button className="item-todo__edit">
                        <Image src={edit} alt='edit'/>
                    </button>
                    <button className="item-todo__flag">
                        <Image src={flagEmpty} alt='flag'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoList;