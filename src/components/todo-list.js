import React, {Component} from 'react';
import TodoItem from './todo-item.js';
import _ from 'lodash';

export default class TodoList extends Component {

    renderList() {
        let todos = this.props.todos
        let props = _.omit(this.props, ['todos'])
        return todos.map( (todo, index) =>
            <TodoItem key={index}
                      todo={todo}
                      {...props}
            />
        )
    }

    render() {
        const ulStyle = {
            display: "flex",
            flexDirection: "column",
            listStyleType: "none",
            width: 300,
        }
        return (
            <ul style={ulStyle}>

                {this.renderList()}

            </ul>
        )
    }
}