import React ,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

export default class App extends Component{
  render(){
    return(
      <div>
        <h1 className="bg-danger">Hello from app</h1>
        <TodoInput />
        <TodoItem />
        <TodoList />
      </div>
    );
  }
}