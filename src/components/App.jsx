import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './contacts/ContactList';
import { Filter } from './filter/filter';

export const App = () => {
  return (
    <section>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  );
};
