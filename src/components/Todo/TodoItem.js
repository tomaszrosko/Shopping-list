import React from 'react';

const TodoItem = props => {
    const markHandler = () =>  props.markClicked(props.element.id);

    return <div className={`card-list ${props.element.isComplited ? 'complated' : ''}`} key={props.element.id}>
        <h2>{props.element.title}</h2>
        <button onClick={markHandler}>Kupione</button>
    </div>
}

export default TodoItem;