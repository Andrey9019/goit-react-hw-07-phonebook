import React from 'react';
import { FormInput, Label } from "./Filter.style"
import { useDispatch, useSelector } from 'react-redux';
import {  setFilter } from 'components/redux/filtersSlice';
import { selectFilter } from 'components/redux/selectors';

export const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter)

    const handleFilter = (value) => {
        dispatch(setFilter(value.target.value))

    }

    return (
        <Label>
            Find Contacts: 
            <FormInput type="text" name="filter"
                value={filter} onChange={handleFilter}></FormInput>
        </Label>
    )
}