import styles from './styles.module.css';

const Statistics = ({ children, optins, total, percentage }) => {
   const values = Object.keys(optins);

   return (
      <>
         <p className={styles.total}> Total: {total} </p>
         <p className={styles.percentage}>
            Positive feedback:
            {{ percentage } === 'NaN' ? '0' : percentage}%
         </p>
         <ul className={styles.statList}>
            {values.map(value => (
               <li key={[value]}>
                  {[value]}:{optins[value]}
               </li>
            ))}
            {children}
         </ul>
      </>
   );
};

export default Statistics;
