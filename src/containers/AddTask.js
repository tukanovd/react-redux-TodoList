import React from 'react'
import {connect} from 'react-redux'
import {addTask} from '../actions'


let AddTodo = ({dispatch}) => {
    let input = {};

    function onSubmit(e) {
        e.preventDefault();
        if (!input.text.value.trim()) {
            return
        }
        let taskDescription = {
            id: generateId(),
            text: input.text.value,
            taskName: input.taskName.value.trim() ? input.taskName.value : 'Task',
            date: getCurrentDate(),
            endDate: input.date.value ? input.date.value : ''
        };
        dispatch(addTask(taskDescription));
        input.text.value = '';
        input.taskName.value = '';
        input.date.value = '';
    }

    return (
        <form className="todoForm form-horizontal" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
                <div className="col-md-4">
                    <input type="text"
                           ref={node => {
                               input.taskName = node
                           }}
                           placeholder="Task name" className="form-control"/>
                </div>
                <div className="col-md-4">
                    <input type="date"
                           ref={node => {
                               input.date = node
                           }}
                           className="form-control"/>
                </div>
                <div className="col-md-10 vert-offset-top-2">
                    <input type="text"
                           ref={node => {
                               input.text = node
                           }}
                           className="form-control"
                           placeholder="What do you need to do?"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 col-md-offset-2 text-right bottom">
                    <input type="submit" value="Save Item" className="btn btn-primary"/>
                </div>
            </div>
        </form>
    )
};

function generateId() {
    return Math.floor(Math.random() * 90000) + 10000;
}

function getCurrentDate() {
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timezone: 'UTC'
    };
    let date = new Date().toLocaleString("ru", options);

    return date;
}

AddTodo = connect()(AddTodo);

export default AddTodo