import React, {Component} from 'react';

export default class TodoEntry extends Component {
    constructor() {
        super()

        this.state = {
            err: ''
        }
    }

    /*
     * Validate the task input, if not given, or already exists, change error message,
     * otherwise, error message clear
     */
    validateTask(task) {
       return this.props.validateTask(task)
    }

    createTask(e) {
        e.preventDefault()

        let task = this.refs.taskInput.value;

        let validateMsg = this.validateTask(task)

        this.setState({
            err: validateMsg
        })

        if (validateMsg) return

        this.props.createTask(task)
        this.refs.taskInput.value = ''
        // task = ''
    }

    render() {
        return (
            <div>

                <form onSubmit={this.createTask.bind(this)}>
                    <input
                        type="text"
                        ref="taskInput"
                    />
                    <button
                        type="submit">Create
                    </button>

                </form>
                <div style={{color: "red"}}>{this.state.err}</div>

            </div>
        )

    }
}