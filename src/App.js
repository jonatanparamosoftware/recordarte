import React, { Component } from 'react';
import './App.css';
import tasks from "./sample/task.json";
import Tasks from "./components/Tasks";

class App extends Component {

  state = {
    tasks: tasks
  }

  render(){
    //las {} permiten interpretar codigo de javascript
    //le estoy pasando todas las tareas a este complemento
    return <div>
      <Tasks tasks={this.state.tasks}/> 
    </div>
  }
}


export default App;
