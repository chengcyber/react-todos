import React, {Component} from 'react';
import TodoEntry from './todo-entry.js';
import TodoList from './todo-list.js';
import _ from 'lodash';

const todos = [
    {
        task: 'make a todo app',
        isCompleted: false
    },
    {
        task: 'buy a mac',
        isCompleted: true
    }
]

class App extends Component {
    constructor() {
        super()

        this.state = {
            todos
        }
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        })

        this.setState({todos})
    }

    editTask(oldTask, newTask) {
        let todos = this.state.todos
        todos.find(todo => todo.task === oldTask).task = newTask

        this.setState({todos})
    }

    deleteTask(task) {
        console.log('delete task', task)
        const todos = this.state.todos
        _.remove(todos, todo => todo.task === task)
        this.setState({
            todos
        })
    }

    toggleTask(task) {
        console.log('toggle complete', task)
        const todos = this.state.todos
        const todo = todos.find(todo => todo.task === task)
        todo.isCompleted = !todo.isCompleted
        this.setState({
            todos
        })
    }

    /*
     * Validate the task input, if not given, or already exists, change error message,
     * otherwise, error message clear
     */
    validateTask(task) {
        if (!task) {
            return 'Please input task name'
        } else if (this.state.todos.find(todo => todo.task === task)) {
            return 'This task already exists'
        } else {
            return ''
        }
    }

    render() {
        return (
            <div>
                <h1>React Todos App</h1>
                <TodoEntry
                    createTask={this.createTask.bind(this)}
                    validateTask={this.validateTask.bind(this)}
                />
                <TodoList
                    todos={this.state.todos}
                    editTask={this.editTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                    toggleTask={this.toggleTask.bind(this)}
                    validateTask={this.validateTask.bind(this)}
                />
            </div>
        )
    }
}


export default App;