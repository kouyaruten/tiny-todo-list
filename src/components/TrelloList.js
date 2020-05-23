import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import EditListButton from './EditListButton';
import TextArea from 'react-textarea-autosize';
import { editList } from '../actions';
import TrelloForm from './TrelloForm';
import Button from '@material-ui/core/Button';

const ListContainer = styled.div`
    background-color: '#dfe3e6';
    border-radius: 3px;
    width: 22%;
    padding: 16px;
    margin-right: 8px;
    height: 100%;
`;

const List = styled.div`
    background-color: ${(props) => (props.isDraggingOver ? '#dfe3e6' : '#efeeee')};
    padding: 16px;
    transition: all 0.1s;
    box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.5), 6px 6px 16px rgba(209, 205, 199, 0.5);
    border-radius: 5px;
    max-height: 70vh;
    overflow: auto;
`;

class InnerList extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps === this.props) {
            return false;
        }
        return true;
    }
    render() {
        return this.props.cards.map((card, index) => (
            <TrelloCard
                key={card.id}
                text={card.text}
                id={card.id}
                index={index}
                completed={card.completed}
                isTiny={this.props.listID === '0'}
                isTask={this.props.listID === '1'}
                isGoal={this.props.listID === '2'}
            />
        ));
    }
}

export const TrelloList = (props) => {
    const { title, listID, index } = props;
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(title);
    const placeholder = `Add ${title}`;
    const toggleEditing = () => {
        setEditing(!editing);
    };
    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleEditList = (e) => {
        e.preventDefault();
        const { dispatch } = props;
        if (text.trim() !== '') {
            dispatch(editList(text, listID));
        }
        toggleEditing();
    };

    const handleFocus = (e) => {
        e.target.select();
    };

    const renderTitle = () => {
        const editable = listID !== '0' &&listID !== '1' && listID !== '2';
        return !editing ? (
            <h3 style={{ marginLeft: '16px', color: '#303030', cursor: 'pointer',overflow:'hidden',cursor: editable ? 'pointer' : 'default',textOverflow:'ellipsis',whiteSpace:'nowrap'}} onClick={editable ? toggleEditing : undefined}>
                {text}
            </h3>
        ) : (
            <form onSubmit={handleEditList}>
                <input
                    type="text"
                    autoFocus
                    onFocus={handleFocus}
                    onBlur={handleEditList}
                    value={text}
                    onChange={handleInputChange}
                    style={{
                        resize: 'none',
                        height: '100%',
                        overflow: 'hidden',
                        outline: 'none',
                        border: 'none',
                        fontSize: '1.1em',
                        fontWeight: '700',
                        color: '#606060',
                        padding: '16px',
                        marginTop:'3px',
                        marginBottom:'12px'
                    }}
                />
            </form>
        );
    };
    return (
        <Draggable draggableId={String(listID)} index={index}>
            {(provided) => (
                <ListContainer {...provided.draggableProps} ref={provided.innerRef}>
                    <div
                        style={{
                            padding: '0 16px',
                            minHeight:'50px'
                        }}
                    >
                        {renderTitle()}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0 16px',
                            alignItems: 'stretch',
                            marginBottom: '1rem',
                        }}
                    >
                        <TrelloForm listID={listID} />
                    </div>
                    <div {...provided.dragHandleProps}>
                        <Droppable droppableId={String(listID)}>
                            {(provided, snapshot) => (
                                <List
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    isDraggingOver={snapshot.isDraggingOver}
                                >
                                    <InnerList cards={props.cards} listID={listID} />
                                    {provided.placeholder}
                                    {/* <TrelloActionButton listID={listID} /> */}
                                </List>
                            )}
                        </Droppable>
                    </div>
                </ListContainer>
            )}
        </Draggable>
    );
};

export default connect()(TrelloList);
