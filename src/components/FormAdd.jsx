import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem, changeItemField, resetItemField, loadData } from '../actions/actions';

function FormAdd() {
    const item = useSelector(state => state.add);
    const dispatch = useDispatch();

    const onChange = (event) => { 
        const {name, value} = event.target; 
        dispatch(changeItemField(name, value));
    }

    const onSubmit = React.useCallback((event) => { 
        event.preventDefault(); 
        if (item.isEditing) {
            dispatch(updateItem(item.id, item.name, item.price));
        } else {
            dispatch(addItem(item.name, item.price));
        }
        dispatch(resetItemField());
    }, [item, dispatch]);

    const onCancel = () => {
        dispatch(loadData({
            id: '',
            name: '',
            price: '',
            isEditing: true,
        }))
    }

    return ( 
        <form className="form" onSubmit={onSubmit}>
            <div className="form-name">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" value={item.name} onChange={onChange} />
            </div>
            <div className="form-price">
                <label htmlFor="price">Price</label>
                <input type="text" id="price" name="price" placeholder="Price" value={item.price} onChange={onChange} />
            </div>
            <button type="submit">Save</button>
            {item.isEditing && <button type="button" onClick={onCancel}>Cancel</button>}
        </form>
    );
}

export default FormAdd;