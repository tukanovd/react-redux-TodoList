import React from 'react'
import Header from './Header'
import AddTask from '../containers/AddTask'
import VisibleTodoList from '../containers/VisibleTodoList'
import '../App.css'

const App = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-md-offset-3 vert-offset-top-2 head-container header">
                <div className="orange-head header">
                    <div className="col-md-offset-1 vert-offset-top-0 title-container">Todo List</div>
                </div>
            </div>
            <div className="col-md-6 col-md-offset-3 head-container footer">
                <Header />
                <VisibleTodoList />
                <AddTask />
            </div>
        </div>
    </div>
);


export default App