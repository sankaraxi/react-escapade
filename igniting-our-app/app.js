import React from 'react';
import ReactDOM from 'react-dom';


const heading = React.createElement('h1', 
    { id: "heading", xyz: "abc" }, // attributes 
    'Hello World from React!');

console.log(heading); //returns object

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

/*
<div id="parent">
    <div id="child">
        <h1 id="heading">I'm inside parent's child's child</h1>
    </div>
</div>

ReactElement creates an object , while rendering into DOM - HTML is understood by the browser
*/

const parent1 = React.createElement('div', 
    { id: 'parent' }, 
    React.createElement('div', 
        { id: 'child' }, 
        [React.createElement('h1', 
            { id: 'heading' }, 
            "I'm a h1 inside parent"),
        React.createElement('h2',
            { id: 'sub-heading' },
            "I'm a h2 inside parent")]
    )
);

/*
<div id="parent">
    <div id="child">
        <h1 id="heading">I'm inside parent's child's child</h1>
    </div>
    <div id="child2">
        <h1 id="heading">I'm inside parent's child's child</h1>
    </div>
</div>

ReactElement creates an object , while rendering into DOM - HTML is understood by the browser
*/

const parent = React.createElement('div', 
    { id: 'parent' }, 
    [React.createElement('div', 
        { id: 'child' }, 
        [React.createElement('h1', 
            { id: 'heading' }, 
            "I'm a h1 inside parent"),
        React.createElement('h2',
            { id: 'sub-heading' },
            "I'm a h2 inside parent")]),
    React.createElement('div', 
        { id: 'child2' }, 
        [React.createElement('h1', 
            { id: 'heading' }, 
            "I'm a h1 inside parent"),
        React.createElement('h2',
            { id: 'sub-heading' },
            "I'm a h2 inside parent")])
    ]
);

root.render(parent);
console.log(parent); //returns object

// react can be used in small portion of website, not necessary to use in the entire website
// it is the beauty of this exciting library compared to Angular and Vue

// JSX - JavaScript XML





