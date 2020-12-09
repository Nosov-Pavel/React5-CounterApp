import React, {useState} from "react";
import './App.css';

function App() {
    const intitItem = {id: 1, user: 'Pavel', gender: 'm', active: true};

    const intinItem = {id: 2, user: 'Petya', gender: 'm', active: false};

    const [list1, setList1] = useState([intinItem1]);
    const [list2, setList1] = useState([intinItem2]);

return (
    <div className='App'>
        TODO
        {list1.map(el=> <li>{el.user}**{el.gender}**{el.active.toString()}
        <button>Move to other List</button>
        </li>)
        }
        <hr/>
        {list2list1.map(el=> <li>{el.user}**{el.gender}**{el.active.toString()}
            <button>Move to other List</button>

    </div>
);
}
export default App;