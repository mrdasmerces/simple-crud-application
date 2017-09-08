import React from 'react';

class TaskForm extends React.Component {
  render(){
    const { handleAddTask } = this.props;
    return (
      <div className="row">
        <div className="form-group col-sm-3">
          <label htmlFor="usr">New task: </label>
          <input type="text" className="form-control" id="usr"/>
        </div>
        <div className="form-group col-sm-3">
          <button className="btn btn-primary" onClick={handleAddTask}>Add</button>
        </div>
      </div>
      );
  }
}

export default TaskForm;