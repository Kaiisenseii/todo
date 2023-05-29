import { TaskProps } from "@/types/task";
import React from "react";

interface TaskItemProps {
  task: TaskProps;
}

const Task = ({ task }: TaskItemProps) => {
  return (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td>Blue</td>
    </tr>
  );
};

export default Task;
