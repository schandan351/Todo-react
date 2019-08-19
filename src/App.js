import React ,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import uuid from "uuid";
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

export default class App extends Component{
  state={
    items:[{id:1,title:"get ready"},{id:1,title:"get ready"}],
    id:uuid(),
    item:'',
    editItem:false
  };
  handleChange=(e)=>{
    console.log("handle change");
  }
  handleSubmit=(e)=>{
    console.log("handle submit");
  }
  clearList=()=>{
    console.log("clear list");
  }
  handleDelete=(id)=>{
    console.log("Handle delete");
  }
  handleEdit=(id)=>{
    console.log(`handle edit ${id}`);
    
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">Todo Input</h3>
              <TodoInput item={this.state.item} handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
              <TodoList items={this.state.items} handleDelete={this.handleDelete}
                clearList={this.clearList} handleEdit={this.handleEdit}
              />
          </div>
        </div>
      </div>
    );
  }
}