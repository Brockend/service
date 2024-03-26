import AddTodoModal from "../components/AddTodoModal/AddTodoModal";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

import "../globals.scss";
import "./todolayout.scss";

export default function TodoLayout({ children }) {
	return (
        <div className="todolayout">
            <Header/>
            <div className="todolayout__content" style={{flex: 1}}>
                <Sidebar/>
                {children}
            </div>
            <Footer/>
            <AddTodoModal/>
        </div>
	);
}
