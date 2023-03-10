import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Container, TitleContainer, TitleContacts, Loading } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { getIsLoading, getError } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <TitleContainer>Phonebook</TitleContainer>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <Loading>
        {isLoading && !error && <p>Request in progress... 👌</p>}
      </Loading>
      <ContactList />
    </Container>
  );
};

export default App;
