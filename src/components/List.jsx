import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadData, removeItem, resetItemField } from '../actions/actions';

function List() {
    const items = useSelector(state => state.list);
    const { filter } = useSelector(state => state.filter);
    const filterItems = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
    const dispatch = useDispatch();

    const onDeleteClick = (id) => { 
        dispatch(removeItem(id));
        dispatch(resetItemField());

    };

    const onEditClick = (item) => {
        dispatch(loadData(item));
    }; 

    return (
        <ul className="list">
            {filterItems.map(item => (
                <li key={item.id}>
                    <div>
                        `{item.name} {item.price}`
                    </div>
                    <div>
                        <button onClick={() => onEditClick(item)}>&#9998;</button>  
                        <button onClick={() => onDeleteClick(item.id)}>&#10006;</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default List