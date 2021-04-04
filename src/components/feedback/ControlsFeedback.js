import styles from './styles.module.css';

const ControlsFeedback = ({
   incrementGoodCounter,
   incrementNeutralCounter,
   incrementBadCounter,
}) => {
   return (
      <ul className={styles.buttonList}>
         <li>
            <button type="button" onClick={incrementGoodCounter}>
               Good
            </button>
         </li>
         <li>
            <button type="button" onClick={incrementNeutralCounter}>
               Neutral
            </button>
         </li>
         <li>
            <button type="button" onClick={incrementBadCounter}>
               Bad
            </button>
         </li>
      </ul>
   );
};

export default ControlsFeedback;
