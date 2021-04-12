import styles from './styles.module.css';

const ControlsFeedback = ({ options, incrementCounter }) => {
   return (
      <ul className={styles.buttonList}>
         {options.map(option => (
            <li key={[option]}>
               <button type="button" onClick={() => incrementCounter([option])}>
                  {[option]}
               </button>
            </li>
         ))}
      </ul>
   );
};

export default ControlsFeedback;
