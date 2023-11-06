import {Phonebook} from 'components/Phonebook/Phonebook'
import { nanoid } from 'nanoid';
import {PhoneList} from 'components/PhoneList/PhoneList'
import { Filter } from 'components/Filter/Filter'
import { Container } from './App.style';



export const App = () => {

    return (<Container>
    <Phonebook/>
    <Filter></Filter>
    <PhoneList />
   </Container>
);
}
