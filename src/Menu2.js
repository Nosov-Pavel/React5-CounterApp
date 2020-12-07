import React from "react";

export default function Menu2(props){
    const d = props.menu2.map(el => <li key={el.title2}>{el.title2}</li>)


    return (
            <ul>{d}</ul>

        )
}