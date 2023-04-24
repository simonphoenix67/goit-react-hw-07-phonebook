import { useState } from 'react';
 import { nanoid } from 'nanoid';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts, addContact } from '../../redux/slice';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/contactsSlice';

// import PropTypes from 'prop-types';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  // const contacts = useSelector(getContacts);
  // const dispatch = useDispatch();

    const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    // const isNameExist = contacts.find(
    //   (contact) => contact.name.toLowerCase() === name.toLowerCase()
    // );



    const existingContact = contacts.find(
  (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

      if (existingContact) {
  alert(`${name} is already in contacts`);
  } else {
  const isContactAdded = contacts.some((contact) => contact.number === number);
  if (isContactAdded) {
    alert(`${number} is already in contacts`);
  } else {
    addContact(contact);
  }
}


    setName('');
    setNumber('');
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};



