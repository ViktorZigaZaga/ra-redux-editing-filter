import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, resetFilter } from '../actions/actions';

function FormFilter() {
    const { filter } = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const onChange = (event) => {
        dispatch(setFilter(event.target.value));
    }

    const onReset = () => {
        dispatch(resetFilter());
    }

    return (
        <div className="filter">
            <input type="text" placeholder="Filter" value={filter} onChange={onChange} />
            <button onClick={onReset}>Reset filter</button>
        </div>
    );
}

export default FormFilter;