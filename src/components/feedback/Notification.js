import styles from './styles.module.css';

const Notification = ({ message }) => {
   return <h2 className={styles.notification}> {message} </h2>;
};
export default Notification;
