import React, { Component } from 'react';

export default class TaskForm extends Component {
    state = {
        title: '',
        description: ''
    }

    //esto es para evitar que se refresque la pagina
    onSubmit = e => { //e es un parametro,que en este caso significa evento puede ser cualquier nombre o letra, como el parametro solo tiene un valor, no es necesario poner los parentecis
       
        e.preventDefault();
    }

    onChange = e => { //se crea la funcion para poder reutilizarla en varias partes en este caso en onchange
        console.log (e.target.value)//e.target.value se usa para que onchance escuche lo que se esta escribiendo en el input
    }

    render () {
        return (
            <form onSubmit={this.onSubmit}> {/*onsubmit es para que no se refresque la pagina cada que le damos enviar */}
                <input 
                    type="text" 
                    placeholder="Write a Task"
                    onChange={this.onChange} 
                    value={this.state.title}/> {/*placeholder sirve para agregar un campo en el cual se puede escribir */} 
                <br/>
                <br/>
                <textarea 
                    placeholder="Write a Description" 
                    onChange={this.onChange} 
                    value={this.state.description}>{/*onchance  es para que se escuche lo que se escriba en los dos input, y se escucha por medio de e.target.value*/}
                </textarea> 
                <input type="submit"/>
            </form>
        )
    }
}