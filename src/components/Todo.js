import React, {PropTypes} from 'react'

const Todo = ({onClick, onDeleteClick, newState}) => {
    const
        id = newState.id,
        startDate = newState.date,
        taskName = newState.taskName,
        taskDescription = newState.text,
        completed = newState.completed,
        endDate = newState.endDate;
    return (
        <div id={id} className="list-group-item"
             style={{backgroundColor: completed ? '#2e6da4' : 'white'}}
        >
            <div className="col-md-offset-7 dateTime">started: {startDate}</div>
            <label className="col-md-2 control-label">{taskName}</label>
            <div className="pull-right" role="group">
                <button type="button" className="btn btn-xs btn-success img-circle"
                        onClick={onClick}>&#x2713;</button>
                <button type="button" className="btn btn-xs btn-danger img-circle"
                        onClick={onDeleteClick}>&#xff38;</button>
            </div>
            <div className="offset-right-2">{taskDescription}</div>
            <div className="col-md-offset-7 dateTime">{endDate ? 'due date: ' + endDate : ' '}</div>

        </div>
    )
};


export default Todo