import React from 'react';

const person = (props) => {
    return (
    <div>
        <p> I'm a {props.name} and I am {props.age} years Old</p>
        <p>{props.childern}</p>
        </div>
        )
}

export default person;