import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const controlsClasses = [styles.controls];
const buttonClasses = [styles.button];

const Controls = ({
  handleCount,
  isIncreamentDesabled,
  isDecreamentDesabled,
}) => (
  <section className={controlsClasses}>
    <button
      className={buttonClasses}
      disabled={isDecreamentDesabled}
      type="button"
      onClick={() => handleCount(-1)}
    >
      Назад
    </button>
    <button
      className={buttonClasses}
      disabled={isIncreamentDesabled}
      type="button"
      onClick={() => handleCount(1)}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  handleCount: PropTypes.func.isRequired,
  isIncreamentDesabled: PropTypes.bool.isRequired,
  isDecreamentDesabled: PropTypes.bool.isRequired,
};

export default Controls;
