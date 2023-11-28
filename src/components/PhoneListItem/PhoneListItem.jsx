import { useDispatch } from "react-redux"
import { ButtonItem, ListItem } from "./PhoneListItem.style"
import { deleteContact } from "components/redux/operations";

export const PhoneListItem = ({ id, name, phone}) =>
{
const dispatch = useDispatch()
  const handleRemove = () => {
dispatch(deleteContact(id))
  }

    return (
      <ListItem key={id} >
        {name}: {phone}
        <ButtonItem
          onClick={handleRemove}>
          Remove
        </ButtonItem>
      </ListItem>
    )}
  
