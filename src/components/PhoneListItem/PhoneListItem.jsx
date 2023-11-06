import { useDispatch } from "react-redux"
import { ButtonItem, ListItem } from "./PhoneListItem.style"
import { removeContact } from "components/redux/contactsSlice";


export const PhoneListItem = ({ id, firstName, number}) =>
{
  const dispatch = useDispatch()
  const handleRemove = () => {
dispatch(removeContact(id))
  }

    return (
      <ListItem key={id} >
        {firstName}: {number}
        <ButtonItem
          onClick={handleRemove}>
          Remove
        </ButtonItem>
      </ListItem>
    )}
  
