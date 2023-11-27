import { PhoneListItem } from 'components/PhoneListItem/PhoneListItem';
import { List } from './PhoneList.style';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'components/redux/selectors';


export const PhoneList = () => {

  const filterContacts = useSelector(selectFilteredContacts)

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
