import React from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this._handleChange = this._handleChange.bind(this);
  }

  render(){
    const { handleAddTask } = this.props;
    return (
      <div className="row">
        <div className="form-group col-sm-3">
          <label htmlFor="usr">
            New task: 
          </label>
          <input type="text" 
            value={this.state.value} 
            onChange={this._handleChange} 
            className="form-control" 
            id="usr"
          />
        </div>
        <div className="form-group col-sm-3">
          <button 
            className="btn btn-primary" 
            onClick={() => handleAddTask(this.state.value)}>
            Add
          </button>
        </div>
      </div>
      );
  }

  _handleChange(event) {
    this.setState({value: event.target.value});
  }
}

export default TaskForm;