import { CONSTANTS } from '../actions';
import uuid from 'uuid/v4';

const initialState = [
    {
        title: 'Tiny 💡',
        id: '0',
        cards: [
            {
                id: uuid(),
                text: 'You can add a tiny todo here.',
                completed: false,
            },
            {
                id: uuid(),
                text: 'Send an email to my colleague',
                completed: true,
            },
        ],
    },
    {
        title: 'Task 📝',
        id: '1',
        cards: [
            {
                id: uuid(),
                text: 'You can add a task here.',
                completed: false,
            },
            {
                id: uuid(),
                text: 'Do homework',
                completed: true,
            },
            {
                id: uuid(),
                text: 'Go shopping',
                completed: true,
            },
        ],
    },
    {
        title: 'Goal 🎖',
        id: '2',
        cards: [
            {
                id: uuid(),
                text: 'You can add a goal here',
                completed: false,
            },
            {
                id: uuid(),
                text: 'Exercise',
                completed: false,
            },
            {
                id: uuid(),
                text: 'Eat healthier',
                completed: false,
            },
        ],
    },
    {
        title: 'Archive 🗂',
        id: '3',
        cards: [
            {
                id: uuid(),
                text: 'All the completed todos will go to archive after deleted.',
                completed: false,
            },
            {
                id: uuid(),
                text: 'Start to use tiny!',
                completed: false,
            },
            {
                id: uuid(),
                text: 'You can also add a customized column.',
                completed: false,
            },
        ],
    },
];

const listReducer = (state = JSON.parse(window.localStorage.getItem('todos')) || initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST: {
            const newList = {
                title: action.payload,
                cards: [],
                id: uuid(),
            };
            return [...state, newList];
        }

        case CONSTANTS.EDIT_LIST: {
            const { title, listId } = action.payload;

            const newState = state.map((list) => {
                if (list.id === listId) {
                    return {
                        ...list,
                        title: title,
                    };
                } else {
                    return list;
                }
            });

            return newState;
        }

        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,
                id: uuid(),
                completed: false,
            };
            const newState = state.map((list) => {
                if (list.id === action.payload.listId) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard],
                    };
                } else {
                    return list;
                }
            });
            return newState;
        }

        case CONSTANTS.EDIT_CARD: {
            const { cardId, text } = action.payload;
            let newState = [...state];
            newState.forEach((list) => {
                list.cards = list.cards.map((card) => {
                    if (card.id === cardId) {
                        return {
                            ...card,
                            text: text,
                        };
                    } else {
                        return card;
                    }
                });
            });
            return newState;
        }

        case CONSTANTS.DELETE_CARD: {
            const { cardId } = action.payload;
            let newState = [...state];
            let card;
            let archive = { ...newState.find((list) => list.id === '3') };
            for (let i = 0; i < newState.length; i++) {
                for (let j = 0; j < newState[i].cards.length; j++) {
                    let c = { ...newState[i].cards[j] };
                    if (c.id === cardId) {
                        card = c;
                        //delete from archive
                        if (newState[i].id === '3') {
                            archive.cards = archive.cards.filter((card) => card.id !== cardId);
                            newState.forEach((list) => {
                                list.cards = list.cards.filter((card) => card.id !== cardId);
                            });
                            newState = newState.map((list) => {
                                if (list.id === '3') {
                                    return archive;
                                } else return list;
                            });
                            return newState;
                        }
                        //delete from goal
                        else if (newState[i].id === '2') {
                            archive.cards.push({ ...card, emoji: '🎖' });
                            newState.forEach((list) => {
                                list.cards = list.cards.filter((card) => card.id !== cardId);
                            });
                            newState = newState.map((list) => {
                                if (list.id === '3') {
                                    return archive;
                                } else return list;
                            });
                            return newState;
                        }
                        //delete from tiny
                        else if (newState[i].id === '0') {
                            if (card.completed) {
                                archive.cards.push({ ...card, emoji: '💡' });
                                newState.forEach((list) => {
                                    list.cards = list.cards.filter((card) => card.id !== cardId);
                                });
                                newState = newState.map((list) => {
                                    if (list.id === '3') {
                                        return archive;
                                    } else return list;
                                });
                                return newState;
                            } else {
                                newState.forEach((list) => {
                                    list.cards = list.cards.filter((card) => card.id !== cardId);
                                });
                                return newState;
                            }
                        }
                        //delete from task
                        else if (newState[i].id === '1') {
                            if (card.completed) {
                                archive.cards.push({ ...card, emoji: '📝' });
                                newState.forEach((list) => {
                                    list.cards = list.cards.filter((card) => card.id !== cardId);
                                });
                                newState = newState.map((list) => {
                                    if (list.id === '3') {
                                        return archive;
                                    } else return list;
                                });
                                return newState;
                            } else {
                                newState.forEach((list) => {
                                    list.cards = list.cards.filter((card) => card.id !== cardId);
                                });
                                return newState;
                            }
                        }
                        //delete from others
                        else {
                            if (card.completed) {
                                archive.cards.push({ ...card, emoji: '' });
                                newState.forEach((list) => {
                                    list.cards = list.cards.filter((card) => card.id !== cardId);
                                });
                                newState = newState.map((list) => {
                                    if (list.id === '3') {
                                        return archive;
                                    } else return list;
                                });
                                return newState;
                            } else {
                                newState.forEach((list) => {
                                    list.cards = list.cards.filter((card) => card.id !== cardId);
                                });
                                return newState;
                            }
                        }
                    }
                }
            }
        }

        case CONSTANTS.TOGGLE_CARD: {
            const { cardId } = action.payload;
            let newState = [...state];
            newState.forEach((list) => {
                list.cards = list.cards.map((card) => {
                    if (card.id === cardId) {
                        return {
                            ...card,
                            completed: !card.completed,
                        };
                    } else {
                        return card;
                    }
                });
            });

            return newState;
        }

        case CONSTANTS.DRAG_HAPPENED: {
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId,
                type,
            } = action.payload;
            const newState = [...state];

            if (type === 'list') {
                const list = newState.splice(droppableIndexStart, 1);
                newState.splice(droppableIndexEnd, 0, ...list);
                return newState;
            }

            //in the same list
            if (droppableIdStart === droppableIdEnd) {
                const list = state.find((list) => droppableIdStart === list.id);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }

            //in different lists
            if (droppableIdStart !== droppableIdEnd) {
                const listStart = state.find((list) => droppableIdStart === list.id);
                const card = listStart.cards.splice(droppableIndexStart, 1);
                const listEnd = state.find((list) => droppableIdEnd === list.id);
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }

            return newState;
        }

        default:
            return state;
    }
};

export default listReducer;
