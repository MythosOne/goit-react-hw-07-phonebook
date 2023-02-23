import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../redux/contactsSlice';
import { getContacts } from '../redux/selectors';
import { nanoid } from 'nanoid';
import { AddContactForm, Label, AddButton, FormikInput } from './App.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const loweredCase = name.toLowerCase().trim();
    const searchName = contacts.some(
      cont => cont.name.toLowerCase().trim() === loweredCase
    );

    if (searchName) {
      alert(`${name} is already in contacts`);
    } else if (name.length === 0) {
      alert('Fields must be filled!');
    } else {
      dispatch(
        addContacts({
          id: nanoid(),
          name,
          number,
        })
      );
    }

    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      <AddContactForm>
        <Label>
          Name
          <FormikInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter name"
            required
          />
        </Label>
        <Label>
          Number
          <FormikInput
            type="tel"
            name="number"
            pattern="\d{3}[-]\d{2}[-]\d{2}"
            title="The phone number must consist of numbers and a dash ###-##-##"
            placeholder="Enter phone number"
            required
          />
        </Label>
        <AddButton type="submit">Add Contact</AddButton>
      </AddContactForm>
    </Formik>
  );
};
