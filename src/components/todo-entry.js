import React, {Component} from 'react';

export default class TodoEntry extends Component {

    createTask(e) {
        e.preventDefault()

        this.props.createTask(this.refs.taskInput.value)
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

            </div>
        )

    }
}