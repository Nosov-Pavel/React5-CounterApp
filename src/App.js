import React from "react";
import Menu from "./Menu";
import Menu2 from "./Menu2";
import Menu3 from "./Menu3";
import Menu4 from "./Menu4";

const menu = [
    { title: 'Home', link: '/'},
    { title: 'Products', link: '/products'},
    { title: 'Contacts', link: '/contacts'},
  ];

const menu2 = [
    {title2: 'Address', link: '/address' },
    {title2: 'City', link: '/city' },
    {title2: 'Country', link: '/country' },
];

const person = [
    {title3: 'Name', link: '/'},
    {title3: 'Midle Name', link: '/midleName'},
    {title3: 'Firs Name', link: '/firstName'},
];

const status = [
    {title4: 'Correct', link: '/'},
    {title4: 'Un Correct', link: '/uncorrect'},
    {title4: 'Defolt', link: '/defolt'},
];


export default function App(){
    return(
        <div>
            <h1>Hello WebS</h1>
            <Menu menu={menu}/>
            <Menu2 menu2={menu2}/>
            <Menu3 person={person}/>
            <Menu4 status={status}/>
        </div>
    );
}