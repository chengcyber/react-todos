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

    // deleteTask(task) {
    //     let todos = this.state.todos
    //     _.remove(todos, todo => todo.task = task)
    //     this.setState({
    //         todos
    //     })
    // }

    render() {
        return (
            <div>
                <h1>React Todos App</h1>
                <TodoEntry createTask={this.createTask.bind(this)}/>
                <TodoList
                    todos={this.state.todos}
                    editTask={this.editTask.bind(this)}
                />
            </div>
        )
    }
}


export default App;