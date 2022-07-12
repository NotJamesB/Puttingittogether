import React, {useState} from 'react';
const Person = (props) => {
    const [newAge, setNewAge] = useState(props.age)
    return (
        <div className="person">
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {newAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <p><button onClick={() => setNewAge(newAge + 1)}>Happy Birthday!!!</button> </p>
        </div>
    );
}
export default Person;