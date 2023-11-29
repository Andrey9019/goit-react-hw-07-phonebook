import { PhoneListItem } from 'components/PhoneListItem/PhoneListItem';
import { List } from './PhoneList.style';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';


export const PhoneList = () => {

  const filterContacts = useSelector(selectFilteredContacts)


   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {filterContacts.map(({ name, phone,  id }) => (
        <PhoneListItem
           key={id}
          id={id}
          name={name}
          phone={phone}
        />
        ))}
    </List>
  );
};
