/**
 * @typedef CourseGoalItemProps
 * @type {object}
 * @property {string} id - an ID.
 * @property {(id: string) => void} onDelete - delete handler.
 *
 * @typedef CourseGoalItemFC
 * @type {import("react").FC<CourseGoalItemProps>}
 */
import React from "react";

import "./CourseGoalItem.css";

/** @type { CourseGoalItemFC } */
const CourseGoalItem = ({ id, onDelete, children }) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
