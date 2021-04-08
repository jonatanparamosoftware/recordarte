import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; //enrutador para el navegador
import './App.css';
import tasks from "./sample/task.json";

//components
import Tasks from "./components/Tasks";
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';  

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description)=> { //addtask se crea para que todo lo que se haga en el Taskfrom se almacene en App,js
    const newTask = { //esta es la parte que permite la creacion de una nueva tarea
      title: title,
      description: description,
      id: this.state.tasks.length //como id vas a utilizar desde las tareas su longitud, osea para que la nueva tarea que se crea tenga el numero de la tarea que sigue por ejemplo, la tarea 3
    }
    this.setState({ //estamos modificando el estado de task con setState para poder crear una  nueva tarea
      tasks:[...this.state.tasks, newTask] //estoy diciendo, voy a tomar todo lo que ya teniamos en el estado de las tareas y le voy a agregar algo nuevo, estoy agregando una nueva tarea al arreglo que ya teniamos
    })
  }

  deleteTask = (id) => { //para poder eliminar una tarea dandole al boton de X
    const newTasks = this.state.tasks.filter (task => task.id !== id); //filter permite devolder algunos arrglos||| aqui estoy diciendo que por cada tarea que empieces a recorrer, quiero que examines si el id de la tarea es diferente del id que me estan pasando
    this.setState({tasks: newTasks}) //este es para hacer que la tarea se elimine al dale click al boton X
  }


  checkDone =(id) => { //este compponente se usara para tachar la tarea
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id){
        task.done = !task.done // (!) cambia al valor opuesto, si es true, pasa a false y viceversa
      }
      return task;
    })
    this.setState({tasks: newTasks})
  }

  render(){
    //las {} permiten interpretar codigo de javascript
    //le estoy pasando todas las tareas a este complemento
    
    return <div>
     <Router> {/* router permite definir una especie de url dentro de del navegador, ejem: cuando visiten el / va a pintar el primer router, y cuando visiten /posts, va a pintar el componente llamad posts  */}
        <Route  Path="/" render={()=>{
               return <div>
                  <TaskForm addTask={this.addTask}/> {/*se pone addtask para que enlace con taskform */}
                <Tasks 
                  tasks={this.state.tasks} 
                  deleteTask={this.deleteTask} 
                  checkDone= { this.checkDone}
                />
                </div>
            }}>

        </Route>
        <Route path= "/posts" component={Posts}/>
     </Router> 
    </div>
  }
}


export default App;
