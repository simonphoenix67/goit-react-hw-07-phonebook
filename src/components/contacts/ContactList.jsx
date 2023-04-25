// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import { getContacts, getFilter, deleteContact } from '../../redux/slice';
import { getFilter } from '../../redux/filterSlice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsSlice';



export const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data: contacts, isFetching } = useGetContactsQuery();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = findContacts();

  return (
    <>
      {isFetching && <p>Loading...</p>}
      {contacts && (
        <ul>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <p>
                  {name}: {number}
                </p>
                <button type="button"
                  onClick={() => {
                    deleteContact(id);
                  }}
                >
                  {isLoading ? '...' : 'Delete'} Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

