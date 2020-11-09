import React from 'react';
import styles from './Input.module.css';
<<<<<<< HEAD
const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
=======
const Input = ({ label, type, name }) => {
>>>>>>> 460d8c955598469cef784e01d319416d347308b7
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
<<<<<<< HEAD
      <input
        id={name}
        name={name}
        className={styles.input}
        value={value}
        onChange={onChange}
        type={type}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
=======
      <input id={name} name={name} className={styles.input} type={type} />
      <p className={styles.error}>Error</p>
>>>>>>> 460d8c955598469cef784e01d319416d347308b7
    </div>
  );
};

export default Input;
