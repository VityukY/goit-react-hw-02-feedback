import styles from './styles.module.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
   return (
      <ul className={styles.statList}>
         <li> Good: {good}</li>
         <li> Neutral: {neutral}</li>
         <li> Bad: {bad}</li>
         <li> Total: {total}</li>
         <li>Positive feedback: {percentage === 'NaN' ? '0' : percentage}%</li>
      </ul>
   );
};

export default Statistics;
