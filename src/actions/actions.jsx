import {
    ADD_ITEM, 
    UPDATE_ITEM, 
    REMOVE_ITEM, 
    CHANGE_ITEM_FIELD, 
    RESET_ITEM_FIELD, 
    LOAD_DATA, 
    SET_FILTER, 
    RESET_FILTER
} from './actionsTypes';

export function addItem(name, price) {
    return {
        type: ADD_ITEM, 
        payload: {name, price}
    }
}

export function updateItem(id, name, price) {
    return {
        type: UPDATE_ITEM, 
        payload: {id, name, price}
    }
}

export function removeItem(id) {
    return {
        type: REMOVE_ITEM, 
        payload: {id}
    }
}

export function changeItemField(name, value) {
    return {
        type: CHANGE_ITEM_FIELD, 
        payload: {name, value}
    }
}

export function resetItemField() {
    return {
        type: RESET_ITEM_FIELD, 
    }
}

export function loadData(item) {
    return {
        type: LOAD_DATA, 
        payload: {item}
    }
}

export function setFilter(filter) {
    return {
        type: SET_FILTER, 
        payload: {filter}
    }
}

export function resetFilter() {
    return {
        type: RESET_FILTER, 
    }
}
