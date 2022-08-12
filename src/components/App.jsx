import { Component } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import classes from "./App.module.css"
import Notification from "./Notification";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleLeaveFeedback = (e) => {
    const target = e.target.id;
    this.setState((state) => ({
      [target]: state[target]+ 1 
    }));    
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Math.floor((good / total) * 100) + '%';
    return (
      <div className={classes.root}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {
            total ? 
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            /> :
            <Notification message="There is no feedback" />
          }
          
        </Section>
      </div>
    );
  }
}
