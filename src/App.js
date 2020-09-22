import React, {useState} from 'react'
import ListItem from "./listItem";

function App() {

     const [list, setList] = useState([1, 2, 3, 4]);
     const counterPlus = (index) => {
         console.log('index', index)
        const newArr = list.map((el, i) =>{
            if (index === i) {
                return el + 1
            }

            return el
        })
         console.log('newArr', newArr)

         setList(newArr)

    }

    return (
        <div>
            {list.map( (el, index) => {
               return <ListItem counterPlus={counterPlus} index={index} el={el} key={Math.random()}/>
            })}

        </div>
    );
}

export default App;
