import React from "react";
export default function Menu4(props){
    const j = props.status.map(el => <li key={el.title4}>{el.title4}</li>)
    return(
        <ul>{j}</ul>
    )
}