import React, { Component } from "react";

class Task extends Component {
    render (){
        const {task} = this.props; /*estoy guardando this,props en la conatnte task para no tener que poner this.props en los elementos de abajo */
        return <div>
            {task.title} - 
            {task.description} - 
            {task.done} 
            {task.id}
        <input type="checkbox"/> {/* imput va a servir pra cambiar el estado de .done de tru a false */}
       <button> {/*servira para eliminar cada tarea*/}
           x
       </button>
        </div>
    }
}

export default Task;