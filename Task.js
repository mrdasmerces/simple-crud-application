import React from 'react';
import TaskForm from './TaskForm.js';
import TaskList from './TaskList.js';
import axios from 'axios';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };

    this._handleAddTask = this._handleAddTask.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/tasks`)
      .then(res => {
        const tasks = res.data;
        this.setState({ tasks });
      });
  }

  render(){
    const { tasks } = this.state;
    return (
      <div>
        <TaskForm 
            handleAddTask={this._handleAddTask}
        />
        <TaskList
            tasks={tasks}
            handleRemoveTask={this._handleRemoveTask}
        />
      </div>
    );
  }

  _handleAddTask(event){
    console.log(event.currentTarget.value);
    axios.post(`http://localhost:3000/tasks`, {task: event.currentTarget.value})
      .then(res => {
        const tasks = res.data;
        Task.setState({ tasks });
      });
  }

  _handleRemoveTask(index){
    console.log(index);
    axios.delete(`http://localhost:3000/tasks/${index}` )
      .then(res => {
        const tasks = res.data;
      });    
  }
}

export default Task;