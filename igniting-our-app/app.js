import React from 'react';
import ReactDOM from 'react-dom';

// React.createElement() is used to create a React element
// React.createElement() => returns a React element as an object => once rendered, it is converted to HTML by the browser
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
// JSX is a syntax extension for JavaScript, written to be used with React
// HTML like syntax in JavaScript
// JSX is not a necessity to use React, but it makes the code more readable
// JSX ultimately transpiles to React.createElement() calls which browser understands
// transpiling is done by parcel's babel
// babel is a JavaScript compiler, used to convert code from one form to another
// JSX is not a string, it is compiled to JavaScript

// JSX => React.createElement() => React element (object) => HTML
const jsxElement = <h1 id="heading" className="new" tabIndex="5">Hello World from JSX!</h1>; // 
console.log(jsxElement); //returns object

const root2 = ReactDOM.createRoot(document.getElementById('root2'));

root2.render(jsxElement);

    // React Components
    // Components are independent and reusable code blocks

    // two types of components - functional and class based components
    // class based components is old method
    // functional components is new method

    // react functional component is a normal JavaScript function that returns a React element

    const HeadingComponent = () => {
        return <h1>Hello World from HeadingComponent!</h1>;
    }

    //also can be written as
    const TitleComponent = () => <h1>Hello World I'm Title form Title functional component!😍</h1>;

    
 
    const HeadingComponent2 = () => ( //nested component as known as component composition
        <div id="heading">
            <TitleComponent />  {/*nested component as known as component x`composition*/}
            {element} {/*javascript expression*/}
            <h1>Hello World from HeadingComponent!</h1>
        </div>
    ); // used commonly

const root3 = ReactDOM.createRoot(document.getElementById('root3'));

root3.render(<HeadingComponent2/>);


 

