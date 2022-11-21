import React, { Fragment, useState } from 'react'
import List from './list';

const Form = () => {
    const [input, setInput] = useState("");
    const [todo, setTodos] = useState([]);
    function addInput() {
        setTodos([...todo, input])
        console.log(todo)
        setInput("");
    }


    return (
        <Fragment>
            <input className='task-input' type="text"
                placeholder="Enter a Todo..."
                value={input}
                required
                onChange={(e) => {
                    setInput(e.target.value)
                }}
            ></input>
            <button className='button-add' onClick={addInput} type='submit'>Add</button>
            <List todo={todo} />

        </Fragment>
    )
}

export default Form;