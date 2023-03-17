import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';

import ContactItem from '../ContactItem/ContactItem';

import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  return (
    <ul className={css.listContact}>
      {
        filteredContacts.map(({ id, name, phone }) => {
          return <ContactItem id={id} key={id} name={name} number={phone} />;
        })
      }
    </ul>
  );
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};