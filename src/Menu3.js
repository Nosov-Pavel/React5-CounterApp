import React from "react";

export default function Menu3(props){

    const f = props.person.map(el => <li key={el.title3}>{el.title3}</li>)

    return(
        <ul>{f}</ul>
    )
}