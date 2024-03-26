import { Roboto } from 'next/font/google';

import TodoBase from "../../../components/TodoBase/TodoBase";

import "../../../globals.scss";
import "../../../main-page.scss";

const roboto = Roboto({  subsets: [], display: 'swap', weight: ['400', '500', '700'] })

export default function TodosToday() {
    return (
        <main className={roboto.className} style={{flex: 1}}>
            <div className='main__wrapper'>
                <TodoBase title={'Today'}/>
            </div>
        </main>
    )
}