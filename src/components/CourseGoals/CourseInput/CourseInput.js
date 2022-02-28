/**
 * @typedef CourseInputProps
 * @type {object}
 * @property {(value: string) => void} onAddGoal - add goal handler.
 *
 * @typedef CourseInputFC
 * @type {import("react").FC<CourseInputProps>}
 *
 * @typedef InputChangeHandler
 * @type {import("react").ChangeEventHandler<HTMLInputElement>}
 *
 * @typedef SubmitHandler
 * @type {import("react").FormEventHandler<HTMLFormElement>}
 */
import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
/**
 * CSS module
 * CSS file needs to end with .module.css
 * so that can be detected and processed
 * CSS modules solve the name collision problem by automatically creating a unique class name
 * of the format [filename]\_[classname]\_\_[hash].
 *
 */
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${({ invalid }) => (invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${({ invalid }) => (invalid ? "red" : "#ccc")};
//     background-color: ${({ invalid }) => (invalid ? "salmon" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

/** @type { CourseInputFC } */
const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  /** @type {InputChangeHandler} */
  const goalInputChangeHandler = ({ target: { value } }) => {
    value.trim() && setIsValid(true);
    setEnteredValue(value);
  };

  /** @type {SubmitHandler} */
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!enteredValue.trim()) {
      setIsValid(false);
      return;
    }
    setEnteredValue("");
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
