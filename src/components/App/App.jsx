import React, { React, useState } from 'react';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Appcss from './app.module.css'

function App () {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : (this.state.good / total) * 100;
  };

  render() 
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const  options = ['good', 'neutral', 'bad'];

    return (
      <div className={Appcss.container}>
        <Section title=" Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback}/>
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={positivePercentage.toFixed(2)}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
};


export default App;
