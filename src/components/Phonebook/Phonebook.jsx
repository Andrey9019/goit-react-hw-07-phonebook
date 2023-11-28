import { Formik } from 'formik';
 import * as Yup from 'yup';
import { ButtonForm, FormContainer,PhoneForm,StyledField ,FormErrorMes} from './Phonebook.style';
import { Label } from 'components/Filter/Filter.style';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addContact } from 'components/redux/operations';
import { selectContacts } from 'components/redux/selectors';

 const phonebookSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Name is required'),
     phone: Yup.string()
       .matches(
  '[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}',
         'Enter valid symbols format xxx-xxx-xx-xx'
      )
     .required('Number is required'),
 });


export const Phonebook = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts)
  const handleSubmit = inputValue => {
    if (contacts.find(({ name }) => name === inputValue.name)) {
      return   Notify.failure(`${inputValue.name} is already in your contact list`)
    }
    dispatch(addContact(inputValue))
  }
  return  (
      <FormContainer>
        <h1>Phonebook</h1>
        <Formik
          initialValues={{
            name: '',
            phone: '',
          }}

          validationSchema={phonebookSchema}
          onSubmit={(value, action) => {
            handleSubmit(value);
            action.resetForm()
          }}>
          <PhoneForm>
            <Label >Name
              <StyledField name="name" />
              <FormErrorMes component="p" name="name" />
            </Label>
                
            <Label >Phone Number
              <StyledField type="tel" name="phone" />
              <FormErrorMes component="p" name="phone" />
            </Label>
        
            <ButtonForm type="submit">Add Contact</ButtonForm>
          </PhoneForm>
        </Formik>
      </FormContainer>
    )
}