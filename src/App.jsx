import { Component } from 'react';
import Section from './components/feedback/Section';
import ControlsFeedback from './components/feedback/ControlsFeedback';
import Statistics from './components/feedback/Statistics';
import Notification from './components/feedback/Notification';
import styles from './components/feedback/styles.module.css';
import 'modern-normalize/modern-normalize.css';

class App extends Component {

   state = {
      good: 0,
      neutral: 0,
      bad: 0,
   };

   incrementCounter = id => {
            this.setState(prevState => {
         return {
            [id]: prevState.[id] + 1,
         };
      })

   }

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
               <ControlsFeedback options={this.state} incrementCounter={this.incrementCounter} />
            </Section>
            <Section>
               <h2 className={styles.title}>Statistics</h2>
               {this.counterTotalFeedback() === 0 ? (<Notification message="No feedback given" />) : (
                  <Statistics optins={this.state}>
                  <p> Total: {this.counterTotalFeedback()}</p>
                  <p> Positive feedback: {this.countPositiveFeedbackPercentage() === 'NaN' ? '0' : this.countPositiveFeedbackPercentage()}%</p>
               </Statistics>
               )}
            </Section>
         </div>
      );
   }
}

export default App;
