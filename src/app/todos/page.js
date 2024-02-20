import { Montserrat } from 'next/font/google'

import TodoList from "../components/TodoList/TodoList";

import "../globals.scss";
import "../main-page.scss";

const montserrat = Montserrat({  subsets: [], display: 'swap' })

export default function Todos() {
    return (
        <main className={montserrat.className} style={{flex: 1}}>
            <div className='main__wrapper'>
                <h1 className="main__title">Todos</h1>
                <TodoList/>
            </div>
        </main>
    )
}