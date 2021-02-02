import { useSelector, useDispatch } from "react-redux";
import appOperations from "../../redux//app/app-operations";
import appSelectors from "../../redux/app/app-selectors";
import Notification from "../Notification/Notification";
import styles from "./ContactList.module.css";
import { v4 as uuidv4 } from "uuid";

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(appSelectors.getVisibleContacts);

  const onDelete = (id) => dispatch(appOperations.deleteContact(id));

  return (
    <ul className={styles.list}>
      {!contacts.length && <Notification />}
      {contacts.map((el) => (
        <li className={styles.item} key={uuidv4()}>
          {`${el.name}: ${el.number}`}
          <button
            className={styles.button}
            onClick={() => {
              onDelete(el.id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
