import { CONSTANTS } from '../actions';

export const addCard = (listId, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { text, listId },
    };
};

export const editCard = (cardId, text) => {
    return {
        type: CONSTANTS.EDIT_CARD,
        payload: { text, cardId },
    };
};

export const deleteCard = (cardId) => {
    return {
        type: CONSTANTS.DELETE_CARD,
        payload: { cardId },
    };
};

export const toggleCard = (cardId) => {
    return {
        type: CONSTANTS.TOGGLE_CARD,
        payload: { cardId },
    };
};

export const sort = (droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId, type) => {
    return {
        type: CONSTANTS.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type,
        },
    };
};
