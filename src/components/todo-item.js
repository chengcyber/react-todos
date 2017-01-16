import React, {Component} from 'react';

export default class TodoList extends Component {

    constructor() {
        super()

        this.state = {
            isEditing: false,
            err: ''
        }
    }

    onEditClick() {
        this.setState({
            isEditing: true
        })
    }

    onCancelClick(e) {
        e.preventDefault()

        this.setState({
            isEditing: false,
            err: ''
        })
    }

    validateTask(task) {
        return this.props.validateTask(task)
    }

    onSaveClick(e) {
        e.preventDefault()

        const editTask = this.props.editTask
        const oldTask = this.props.todo.task
        console.log(oldTask)
        const newTask = this.refs.editInput.value
        console.log(newTask)

        const validateMsg = this.validateTask(newTask)

        this.setState({
            err: validateMsg
        })

        if (validateMsg) return

        editTask(this.props.todo.task, this.refs.editInput.value)
        this.setState({
            isEditing: false
        })
    }

    onDeleteClick(e) {
        console.log('onDeleteClick');
        this.props.deleteTask(this.props.todo.task)
    }

    onTaskClick(task) {
        this.props.toggleTask(task)
    }

    renderTaskSection() {
        const {task, isCompleted} = this.props.todo
        const taskStyle = {
            margin: "auto",
            cursor: 'pointer',
            color: isCompleted ? 'green' : 'red'
        }
        if (!this.state.isEditing) {
            return <span style={taskStyle}
                        onClick={this.onTaskClick.bind(this, task)}>{task}</span>
        } else {
            return <form onSubmit={this.onSaveClick.bind(this)} >
                        <input type="text" style={taskStyle}
                               ref="editInput"
                               defaultValue={task}
                        />
                    </form>
        }
    }

    renderActionSection() {
        if (!this.state.isEditing) {
            return (
                <span>
                    <button style={{flex:"none"}}
                        onClick={this.onEditClick.bind(this)}
                    >Edit</button>
                    <button style={{flex:"none"}}
                        onClick={this.onDeleteClick.bind(this)}
                    >Delete</button>
                </span>
            )
        } else {
            return (
                <span>
                    <button style={{flex:"none"}}
                        onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button style={{flex:"none"}}
                        onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </span>
            )
        }
    }

    render() {
        return (
            <li style={{display: "flex", alignItems: "center"}}>
                {this.renderTaskSection()}
                {this.renderActionSection()}
                <span style={{color: 'red'}}>{this.state.err}</span>
            </li>
        )
    }
}