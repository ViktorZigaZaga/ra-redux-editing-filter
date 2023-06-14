import {CHANGE_ITEM_FIELD, RESET_ITEM_FIELD, LOAD_DATA} from '../actions/actionsTypes';

const initialState = {
    id: '',
    name: '',
    price: '',
    isEditing: false,
};

export default function addReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_ITEM_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case RESET_ITEM_FIELD:
            return {...initialState};
        case LOAD_DATA:
            const {item} = action.payload;
            return {...state, 
                id: item.id, 
                name: item.name, 
                price: item.price, 
                isEditing: !item.isEditing};
        default:
            return state;
    }
}