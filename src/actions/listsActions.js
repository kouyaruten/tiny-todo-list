import { CONSTANTS } from '../actions';

export const addList = (title) => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: title,
    };
};

export const editList = (title, listId) => {
    return {
        type: CONSTANTS.EDIT_LIST,
        payload: { title, listId },
    };
};
