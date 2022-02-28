/**
 * @typedef Goal
 * @type {object}
 * @property {string} id - an ID.
 * @property {string} text - goal content.
 *
 * @typedef CourseGoalListProps
 * @type {object}
 * @property {Goal[]} items - array of Goals.
 * @property {(id: string) => void} onDeleteItem - delete handler.
 *
 * @typedef CourseGoalListFC
 * @type {import("react").FC<CourseGoalListProps>}
 */
import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

/** @type { CourseGoalListFC } */
const CourseGoalList = ({ items, onDeleteItem }) => {
  return (
    <ul className="goal-list">
      {items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
