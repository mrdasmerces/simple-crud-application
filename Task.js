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
    this._handleRemoveTask = this._handleRemoveTask.bind(this);
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

  _handleAddTask(task){
    axios.post(`http://localhost:3000/tasks`, { task })
      .then(res => {
        const tasks = res.data;
        this.setState({ tasks });
      });
  }

  _handleRemoveTask(id){
    axios.delete(`http://localhost:3000/tasks/${id}`)
      .then(res => {
        const tasks = res.data;
        this.setState({tasks}) ;
      });   
  }
}

export default Task;