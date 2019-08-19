import React ,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import uuid from "uuid";
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

export default class App extends Component{
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  };
  handleChange=(e)=>{
    this.setState({
      item:e.target.value
    });
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const newItem={
      id:this.state.id,
      title:this.state.item
    }
    const updatedItem=[...this.state.items,newItem];
    this.setState({
      items:updatedItem,
      item:'',
      id:uuid,
      editItem:false
    }
    )

  }
  clearList=()=>{
    this.setState({
      items:[]
    })
  }
  handleDelete=(id)=>{
    const filteredItems=this.state.items.filter(item=>item.id!==id);
    this.setState({
      items:filteredItems
    })
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