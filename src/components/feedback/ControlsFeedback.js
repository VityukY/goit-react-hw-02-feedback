import styles from './styles.module.css';

const ControlsFeedback = ({ options, incrementCounter }) => {
   const values = Object.keys(options);

   return (
      <ul className={styles.buttonList}>
         {values.map(value => (
            <li key={[value]}>
               <button type="button" onClick={() => incrementCounter([value])}>
                  {[value]}
               </button>
            </li>
         ))}
      </ul>
   );
};

export default ControlsFeedback;
