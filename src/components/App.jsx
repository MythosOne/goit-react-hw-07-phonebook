import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Container, TitleContainer, TitleContacts } from './App.styled';

export const App = () => {
  return (
    <Container>
      <TitleContainer>Phonebook</TitleContainer>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
