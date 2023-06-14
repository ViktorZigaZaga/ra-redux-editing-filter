import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from '../actions/actionsTypes'
import { nanoid } from 'nanoid'

const initialState = [
    {
        id: nanoid(),
        name: 'Замена стекла',
        price: 21000,
    },
    {
        id: nanoid(),
        name: 'Замена дисплея',
        price: 25000,
    },
    {
        id: nanoid(),
        name: 'Замена аккумулятора',
        price: 4000,
    },
    {
        id: nanoid(),
        name: 'Замена микрофона',
        price: 2500,
    }
];

export default function listReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_ITEM:
            const {name, price} = action.payload;
            return [...state, {id: nanoid(), name, price: Number(price)}];
        case REMOVE_ITEM:
            const {id} = action.payload;
            return state.filter(item => item.id !== id);
        case UPDATE_ITEM:
            const {id: updateId, name: updateName, price: updatePrice} = action.payload;
            return state.map(item => 
                item.id === updateId 
                ? {...item, name: updateName, price: updatePrice}
                : item);
        default: 
            return state;
    }
}
