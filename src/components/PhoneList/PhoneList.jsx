import { PhoneListItem } from 'components/PhoneListItem/PhoneListItem';
import { List } from './PhoneList.style';
import { useSelector } from 'react-redux';
import { getContacts } from 'components/redux/contactsSlice';
import { getFilter } from 'components/redux/filtersSlice';

const getFilterContscts = (contacts, filter) => {
  const toLowerFilterContacts = filter.toLowerCase();
  return contacts.filter(contact =>
  contact.firstName.toLowerCase().includes(toLowerFilterContacts))
}

export const PhoneList = () => {
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)

  
  const filterContacts = getFilterContscts(contacts,filter)

  return (
    <List>
      {filterContacts.map(({ firstName, number, id }) => (
        <PhoneListItem
           key={id}
          id={id}
          firstName={firstName}
          number={number}
        />
        ))}
    </List>
  );
};
