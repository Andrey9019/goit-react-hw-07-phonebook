import React from 'react';
import { FormInput, Label } from "./Filter.style"
import { useDispatch, useSelector } from 'react-redux';
import { filterValue, getFilter } from 'components/redux/filtersSlice';


export const Filter = () => {
    
    const dispatch = useDispatch()
    const handleFilter = (value, action) => {
        dispatch(value.target.value)
    }

const filter = useSelector(getFilter)

    return (
        <Label>
            Find Contacts: 
            <FormInput type="text" name="filter"
                value={filter} onChange={handleFilter}></FormInput>
        </Label>
    )
}