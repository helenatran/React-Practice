import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoToShow: 'all',
      toggleAllComplete: true,
    }
  }

  async componentDidMount() {
    let res = await fetch('/api/list');
    let data = await res.json();
    this.setState({ todos: data.todos });
  }

  //add one item to the beginning of the list
  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            //same as: id: todo.id, text: todo.text,
            ...todo,
            complete: !todo.complete,
          }
        }
        else {
          return todo;
        }
      })
    })
  }

  updateToShow = (toShowStatus) => {
    this.setState({
      todoToShow: toShowStatus,
    });
  }

  //keep all the todos not equal to that id
  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  //keep all the todos which are not complete
  removeAllCompleteTodos = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    })
  }

  toggleMakeAllComplete = () => {
    this.setState({
      todos: this.state.todos.map((todo) => ({
        ...todo,
        complete: this.state.toggleAllComplete,
      })),
      toggleAllComplete: !this.state.toggleAllComplete,
    })
  }

  render() {
    let todos = [];

    if (this.state.todoToShow === 'all') {
      todos = this.state.todos;
    }
    else if (this.state.todoToShow === 'active') {
      todos = this.state.todos.filter(todo => !todo.complete);
    }
    else if (this.state.todoToShow === 'complete') {
      todos = this.state.todos.filter(todo => todo.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo key={todo.id}
            todo={todo}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)} />
        ))}
        <div>
          Todos Left: {this.state.todos.filter(todo => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateToShow('all')}>All</button>
          <button onClick={() => this.updateToShow('active')}>Active</button>
          <button onClick={() => this.updateToShow('complete')}>Complete</button>
        </div>
        {this.state.todos.some(todo => todo.complete) ?
          (<div>
            <button onClick={this.removeAllCompleteTodos}>Remove all complete todos</button>
          </div>)
          : null}
        <div>
          <button onClick={this.toggleMakeAllComplete}>Toggle all complete: {`${this.state.toggleAllComplete}`}</button>
        </div>
      </div>
    );
  }
}

// During workout:
//-- {JSON.stringify(this.state.todos)} ==> to print the javascript of the array here
//-- filter: keep the todo which are not complete as todos left
//-- we added a condition to the remove all complete todos, so that the buttons appears only when there
//---- are some completed todos ('some' says until you find one, do that)
//---- 'some' is better than filter here bc as soon as it finds 1 item, it stops

export default TodoList;
