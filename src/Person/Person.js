import React from "react" 

const person = (props) => {
    return (
        <div>
            <h2 onClick={props.clicked}>My name is {props.name} i am {(Math.floor(Math.random()*34))} years old</h2>

        </div>
    )
}

export default person;