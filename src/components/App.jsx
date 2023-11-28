import {Phonebook} from 'components/Phonebook/Phonebook'
import {PhoneList} from 'components/PhoneList/PhoneList'
import { Filter } from 'components/Filter/Filter'
import { Container } from './App.style';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from './redux/operations';




export const App = () => {
    const dispatch = useDispatch();
    useEffect(() =>{dispatch(fetchContacts())},[dispatch])

    return (<Container>
    <Phonebook />
        <Filter></Filter>
        <h2>Contacts</h2>
    <PhoneList />
   </Container>)
}
