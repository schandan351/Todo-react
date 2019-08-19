import React,{Component} from 'react';
import {FaBook} from 'react-icons/fa';
export default class TodoInput extends Component{
  render(){
    const {item,editItem,handleChange,handleSubmit}=this.props;
    return(
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
                    <FaBook />
                </div>
              </div>
              <input type="text" className="form-control text-capitalize" 
              value={item} placeholder="Add todo items" onChange={handleChange}
              />
            </div>
            <button className={editItem? "btn btn-block btn-success mt-3": "btn btn-block btn-primary mt-3"}
            type="submit" disabled={item?false:true}
            >
              {editItem?"edit item":"add item"}
              </button>
        </form>
      </div>
    );
  }
}