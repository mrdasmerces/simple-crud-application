import React from 'react';

class TaskItem extends React.Component {
  render(){
    const { handleRemoveTask, task, id } = this.props;

    return (
      <div className="row">
        <div className="form-group col-sm-3">
          <span>{task.taskName}</span>
        </div>
        <div className="form-group col-sm-3">
          <button className="btn btn-primary" onClick={() => handleRemoveTask(id)}>Remove</button>
        </div>
      </div>
      );
  }
}

export default TaskItem; 