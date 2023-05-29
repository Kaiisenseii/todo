"use client";

import React, { FormEventHandler, MouseEventHandler, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";

const AddTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="btn btn-primary w-full"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Add new task <AiOutlinePlus className="ml-2" size={18} />
      </button>

      <Modal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Add new Tasks</h3>
          <div className="modal-action">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full w-full"
            />
            <button type="submit" className="btn">
              Add
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
