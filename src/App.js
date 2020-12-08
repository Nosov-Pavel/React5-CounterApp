import React, {useState} from "react";
import './App.css';

function App() {
    const intitItem = {id: 1, user: 'Pavel', gender: 'm', active: true};

    const intinItem = {id: 2, user: 'Petya', gender: 'm', active: false};

    const [list, setList1] = useState([intinItem1]);
    const [list, setList1] = useState([intinItem2]);

return (
    <div className='App'>
        TODO
        {list1.map(el=> <li>{el.user}**{el.gender}**{el.active.toString()}
        </li>)}

    </div>
);
}
export default App;