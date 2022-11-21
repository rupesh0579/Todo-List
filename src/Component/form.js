import React, { Fragment, useState } from 'react'
import List from './list';

const Form = () => {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);
    function addInput() {
        setTodo([...todo, input])
        console.log(todo)
        setInput("");
    }


    function removeItem(id) {
        setTodo(todo.filter((e, i) => i !== id));
    }

    function removeAll() {
        setTodo([]);
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
            <List todo={todo} removeItem={removeItem} />
            {todo.length > 1 &&
                <button onClick={removeAll}>Remove All</button>}

        </Fragment>
    )
}

export default Form;