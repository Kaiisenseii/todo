import { TaskProps } from "@/types/task";
import React from "react";
import Task from "./Task";

interface todoListProps {
  tasks: TaskProps[];
}

const TodoList: React.FC<todoListProps> = ({ tasks }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Todos</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
