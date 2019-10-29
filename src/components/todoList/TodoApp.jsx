import React, {Component} from 'react';

import { IconContext } from "react-icons";
import { FaTrashAlt } from 'react-icons/fa';

class TodoApp extends Component {
    state = {
        todoList: [],
        input: "",
        disabled: true
    }

    onChanged = (e) => {
        const input = e.target.value;
        this.setState(
            {
                ...this.state,
                disabled: !(input !== ""),
                input: input,
            }
        );
    }

    onButtonPress = (e) => {
        const input = this.state.input;
        let index = Math.random()
        const todo = {
            key: index,
            text: input
        };
        this.setState(
            {
                todoList: [...this.state.todoList, todo],
                input: "",
                disabled: true
            }
        );
    }

    removeTodo = (todo) => {
        this.setState(
            {
                ...this.state,
                todoList: this.state.todoList.filter((value) => {
                    return todo.key !== value.key;
                })
            }
        )
    }


    renderButtonAdd = () => {
        let dis = this.state.disabled;
        let button = <button id="addButton" className="btn btn-primary btn-raised" disabled> Ajouter</button>;

        if (!dis) {
            button = <button id="addButton" className="btn btn-primary btn-raised" onClick={this.onButtonPress}> Ajouter</button>;
        }

        return button
    }
    renderTodoList = () => {
        return this.state.todoList.map((todo) => {
            return (

                    <div key={todo.key} className="list-group-item list-group-item-action flex-column align-items-start">
                        <h1>{todo.text}  <button className="btn btn-outline-danger mr-auto float-right" onClick={()=> this.removeTodo(todo)}>
                            <FaTrashAlt />
                        </button></h1>



                </div>
               )
        })

    }

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-md-10 form-group">
                        <label htmlFor="inputTodo" className="bmd-label-floating">Nouvelle tâche</label>
                        <input
                            id="inputTodo"
                            onChange={this.onChanged}
                            value={this.state.input}
                            className="form-control"/>
                    </div>

                    <div className="col-md-2 mt-4">
                        {this.renderButtonAdd()}
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-10">
                        {this.renderTodoList()}
                    </div>


                </div>
            </div>
        );
    }
}

export default TodoApp;