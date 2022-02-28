/**
 * @typedef ButtonProps
 * @type {object}
 * @property { string } type - input type
 * @property {import("react").MouseEventHandler<HTMLButtonElement>} onClick - click handler
 *
 * @typedef ButtonFC
 * @type {import("react").FC<ButtonProps>}
 */

// import styled from "styled-components";

import styles from "./Button.module.css";

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

/** @type {ButtonFC} */
const Button = ({ type, onClick, children }) => (
  <button type={type} className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
