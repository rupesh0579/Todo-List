import React from 'react'
import './style.css'


const List = (props) => {
    return (

        <div className='list'>
            <h3>Hear is your List</h3>

            {props.todo.map((data, i) => {
                return (
                    <ul>
                        <li className='listData' key={i}>
                            {data}
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}

export default List;