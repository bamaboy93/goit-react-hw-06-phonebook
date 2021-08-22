
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors';
import actions from '../../redux/actions';

import styles from './ContactList.module.css';

function ContactsList () {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.listItem}>
            <span className={styles.name}>{name}:</span>
            <span className={styles.number}>{number}</span>
            <button className={styles.contactsBtn} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
  

export default ContactsList;
