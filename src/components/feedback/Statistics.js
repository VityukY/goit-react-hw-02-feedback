import styles from './styles.module.css';

const Statistics = ({ children, optins }) => {
   const values = Object.keys(optins);

   return (
      <ul className={styles.statList}>
         {values.map(value => (
            <li key={[value]}>
               {[value]}:{optins[value]}
            </li>
         ))}
         {children}
      </ul>
   );
};

export default Statistics;
