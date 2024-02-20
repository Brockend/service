import TodoList from "../components/TodoList/TodoList";

import "../globals.scss";
import "../main-page.scss";

export default function Todos() {
    return (
        <main className="main">
            <h1 className="main__title">Todos</h1>
            <TodoList/>
        </main>
    )
}