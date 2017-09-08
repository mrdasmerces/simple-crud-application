import React from 'react';
import TaskItem from './TaskItem.js';

class TaskList extends React.Component {
  render(){
    const { handleRemoveTask, tasks } = this.props;

    return (
      <div>
        {tasks.map((task, index) =>
          <TaskItem 
              task={task}
              key={index}
              id={index}
              handleRemoveTask={handleRemoveTask}
          />
        )}
      </div>
    );
  }
}

export default TaskList;