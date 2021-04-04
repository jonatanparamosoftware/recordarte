import React, { Component } from 'react';

class Tasks extends Component {
    render (){
        return this.props.tasks.map(e => <p key={e.id}>
            {e.title} - {e.description} - {e.done} {e.id}
          </p>)
    }
}

export default Tasks;
