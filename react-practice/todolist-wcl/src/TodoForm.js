import React from 'react';
import shortid from 'shortid';

class TodoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    }

    handleSubmit = (event) => {
        //to prevent the page to refresh
        event.preventDefault();
        //this onSubmit() is the addTodo from TodoList
        //our 'Todo' has 3 properties
        this.props.onSubmit({
            //generate a short unique id
            id: shortid.generate(),
            text: this.state.text,
            complete: false,
        });
        this.setState({
            text: "",
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="to do..."
                />
                <button onClick={this.handleSubmit}>Add todo</button>
            </form>
        );
    }
}

export default TodoForm;