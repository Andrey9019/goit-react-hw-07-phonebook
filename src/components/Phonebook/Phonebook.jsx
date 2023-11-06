import { Formik } from 'formik';
 import * as Yup from 'yup';
import { ButtonForm, FormContainer,PhoneForm,StyledField ,FormErrorMes} from './Phonebook.style';
import { Label } from 'components/Filter/Filter.style';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'components/redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

 const phonebookSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Name is required'),
     number: Yup.string()
       .matches(
  '[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}',
         'Enter valid symbols format xxx-xxx-xx-xx'
      )
     .required('Number is required'),
 });


export const Phonebook = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts)
  const handleSubmit = inputValue => {
    if (contacts.find(({ firstName }) => firstName === inputValue.firstName)) {
      return   Notify.failure(`${inputValue.firstName} is already in your contact list`)
    }
    dispatch(addContact(inputValue))
  }
  return  (
      <FormContainer>
        <h1>Phonebook</h1>
        <Formik
          initialValues={{
            firstName: '',
            number: '',
          }}

          validationSchema={phonebookSchema}
          onSubmit={(value, action) => {
            handleSubmit(value);
            action.resetForm()
          }}>
          <PhoneForm>
            <Label >Name
              <StyledField name="firstName" />
              <FormErrorMes component="p" name="firstName" />
            </Label>
                
            <Label >Number
              <StyledField type="tel" name="number" />
              <FormErrorMes component="p" name="number" />
            </Label>
        
            <ButtonForm type="submit">Add Coontact</ButtonForm>
          </PhoneForm>
        </Formik>
      </FormContainer>
    )
}