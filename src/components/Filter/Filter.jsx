import React from 'react';
import { FormInput, Label } from "./Filter.style"
import { useDispatch, useSelector } from 'react-redux';
import { filterValue, getFilter } from 'components/redux/filtersSlice';

export const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(getFilter)

    const handleFilter = (value) => {
        dispatch(filterValue(value.target.value))

    }

    return (
        <Label>
            Find Contacts: 
            <FormInput type="text" name="filter"
                value={filter} onChange={handleFilter}></FormInput>
        </Label>
    )
}