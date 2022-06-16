import React from "react" 

const person = (props) => {
    return (
        <div>
            <h2 onClick={props.clicked}>My name is {props.name} i am {props.age} years old</h2>

        </div>
    )
}

export default person;