import styles from './styles.module.css';

const Statistics = ({ options, total, percentage }) => {
   const values = Object.keys(options);

   return (
      <>
         <p className={styles.total}> Total: {total} </p>
         <p className={styles.percentage}>
            Positive feedback:
            {percentage === 'NaN' ? '0' : percentage}%
         </p>
         <ul className={styles.statList}>
            {values.map(value => (
               <li key={[value]}>
                  {[value]}:{options[value]}
               </li>
            ))}
         </ul>
      </>
   );
};

export default Statistics;
