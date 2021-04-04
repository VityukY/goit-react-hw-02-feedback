import { Component } from 'react';
import Section from './components/feedback/Section';
import ControlsFeedback from './components/feedback/ControlsFeedback';
import Statistics from './components/feedback/Statistics';
import Notification from './components/feedback/Notification';
import styles from './components/feedback/styles.module.css';
import 'modern-normalize/modern-normalize.css';

class App extends Component {
   static defaultProps = {
      initialGood: 0,
      initialNeutral: 0,
      initialBad: 0,
   };

   state = {
      good: this.props.initialGood,
      neutral: this.props.initialNeutral,
      bad: this.props.initialBad,
   };

   incrementGoodCounter = () => {
      this.setState(prevState => {
         return {
            good: prevState.good + 1,
         };
      });
   };
   incrementNeutralCounter = () => {
      this.setState(prevState => {
         return {
            neutral: prevState.neutral + 1,
         };
      });
   };
   incrementBadCounter = () => {
      this.setState(prevState => {
         return {
            bad: prevState.bad + 1,
         };
      });
   };
   counterTotalFeedback = () => {
      return this.state.good + this.state.neutral + this.state.bad;
   };
   countPositiveFeedbackPercentage = () => {
      const good = this.state.good;
      const total = this.counterTotalFeedback();
      const percentage = (good / total) * 100;
      return percentage.toFixed(2);
   };

   render() {
      return (
         <div>
            <Section>
               <h1 className={styles.title} >Please leave feedback</h1>
               <ControlsFeedback
                  incrementGoodCounter={this.incrementGoodCounter}
                  incrementNeutralCounter={this.incrementNeutralCounter}
                  incrementBadCounter={this.incrementBadCounter}
               />
            </Section>
            <Section>
               <h2 className={styles.title}>Statistics</h2>
               {this.counterTotalFeedback() === 0 ? (
                  <Notification message="No feedback given" />
               ) : (
                  <Statistics
                     good={this.state.good}
                     neutral={this.state.neutral}
                     bad={this.state.bad}
                     total={this.counterTotalFeedback()}
                     percentage={this.countPositiveFeedbackPercentage()}
                  />
               )}
            </Section>
         </div>
      );
   }
}

export default App;
