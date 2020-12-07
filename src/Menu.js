import React from "react";

export default function Menu(props){

    const c = props.menu.map(el => <li key={el.title}>{el.title}</li>)

    return (
        <ul>
            {c}
        </ul>
    )
}
