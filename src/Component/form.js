import React from 'react'

const Form = () => {
    return (
        <form>
            <input className='task-input' type="text" placeholder="Enter a Todo..." ></input>
            <button className='button-add' type='submit'>Add</button>
        </form>
    )
}

export default Form;