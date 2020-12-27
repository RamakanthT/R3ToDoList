import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const newList = [...this.state.list];
      newList.push(newItem);

      this.setState({
        list: newList,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const newList = [...this.state.list];
    const updateList = newList.filter(item => item.id !== id);
    //above line filters and discand matching id and remaining list is returned
    this.setState({
      list: updateList
    });
  }

  updateInput(input) {
    this.setState({
      newItem: input
    });
  }

  checkboxItem(id){
    const newList = [...this.state.list];
    const updateList = newList.map(item => {
      if(item.id === id){
        item.isDone = !item.isDone;
      };
      return item;
    });

    this.setState({
      list: updateList
    });
  }

  render() {
    return (
      <div>
        <img className="logo" src={logo} width="100" height="100" />
        <h1 className="app-title">LCO ToDo App</h1>
        <div className="container">
          Add an Item..<br />
          <input type="text" className="input-text" name="" 
                placeholder="Write a to do" required value={this.state.newItem} 
                onChange={e => this.updateInput(e.target.value)}/>
          <button className="add-btn" onClick={()=>this.addItem(this.state.newItem)}
           disabled={!this.state.newItem.length}>Add Todo</button>
          <div className="list">
            <ul>
              {this.state.list.map(item=>{
                return(
                  <li key={item.id}>
                    <input type="checkbox" name="isDone" checked={item.isDone} onChange={()=>this.checkboxItem(item.id)} />
                    {item.value}
                  <button className="btn" onClick={()=>this.deleteItem(item.id)}>Delete</button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;