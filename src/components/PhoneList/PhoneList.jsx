import React from 'react';

import { PhoneListItem } from 'components/PhoneListItem/PhoneListItem';
import { List } from './PhoneList.style';
import { useSelector } from 'react-redux';
import { getContacts } from 'components/redux/contactsSlice';
import { getFilter } from 'components/redux/filtersSlice';

export const PhoneList = () => {

  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter)

  const filterContacts = contacts.filter(({ value }) => {
    if (filter === ``) {
      return true
    }
    return value.toLowerCase().includes(filter.toLowerCase())
  })

  return (
    <List>
      {filterContacts.map(({ firstName, number, id }) => (
        <PhoneListItem
          key={id}
          id={id}
          firstName={firstName}
          number={number}
          // onRemove={onRemove}
        />
      ))}
    </List>
  );
};