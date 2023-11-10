import React, { useState } from 'react';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Appcss from './app.module.css';

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setState((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const totalFeedback = state.good + state.neutral + state.bad;
  const positivePercentage = totalFeedback === 0 ? 0 : (state.good / totalFeedback) * 100;
  const options = Object.keys(state);

  return (
    <div className={Appcss.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage.toFixed(2)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;
