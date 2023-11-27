import { useDispatch } from "react-redux"
import { ButtonItem, ListItem } from "./PhoneListItem.style"
import { deleteContact } from "components/redux/operations";



export const PhoneListItem = ({ id, firstName, number}) =>
{


  const dispatch = useDispatch()
  const handleRemove = () => {
dispatch(deleteContact(id))
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
  
