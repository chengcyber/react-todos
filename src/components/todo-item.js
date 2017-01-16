import React, {Component} from 'react';

export default class TodoList extends Component {

    constructor() {
        super()

        this.state = {
            isEditing: false
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
            isEditing: false
        })
    }

    onSaveClick(e) {
        e.preventDefault()

        let editTask = this.props.editTask
        console.log(this.props.todo.task)
        console.log(this.refs.editInput.value)
        editTask(this.props.todo.task, this.refs.editInput.value)
        this.setState({
            isEditing: false
        })
    }

    render() {
        if (!this.state.isEditing) {
            return (
                <li style={{display: "flex", alignItems: "center"}}>
                    <span style={{margin: "auto"}}>{this.props.todo.task}</span>
                    <button style={{flex:"none"}}
                        onClick={this.onEditClick.bind(this)}
                    >Edit</button>
                    <button style={{flex:"none"}}
                    >Delete</button>
                </li>
            )
        } else {
            return (
                <li style={{display: "flex", alignItems: "center"}}>
                    <form onSubmit={this.onSaveClick.bind(this)} >
                        <input type="text" style={{margin:"auto"}}
                               ref="editInput"
                               defaultValue={this.props.todo.task}
                        />
                        <button style={{flex:"none"}} type="submit">Save</button>
                        <button style={{flex:"none"}}
                            onClick={this.onCancelClick.bind(this)}>Cancel</button>
                    </form>
                </li>
            )
        }

    }
}