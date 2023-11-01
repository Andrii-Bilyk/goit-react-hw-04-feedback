import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FeedbackOptions/feedback-options.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles['feedback-options']}>
      {options.map((option) => (
        <button
          key={option}
          className={styles['feedback-button']}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
