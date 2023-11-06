import {Phonebook} from 'components/Phonebook/Phonebook'
import {PhoneList} from 'components/PhoneList/PhoneList'
import { Filter } from 'components/Filter/Filter'
import { Container } from './App.style';



export const App = () => {

    return (<Container>
    <Phonebook />
        <Filter></Filter>
        <h2>Contacts</h2>
    <PhoneList />
   </Container>)
}
