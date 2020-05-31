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
  background-color: ${(props) =>
    props.isDarkMode ? (props.isDraggingOver ? '#40444e' : '#3a3a3c') : props.isDraggingOver ? '#dfe3e6' : '#efeeee'};
  padding: 16px;
  transition: all 0.1s;
  box-shadow: ${(props) =>
    props.isDarkMode ? 'none' : '-6px -6px 16px rgba(255, 255, 255, 0.5), 6px 6px 16px rgba(209, 205, 199, 0.5)'};
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
        isDarkMode={this.props.isDarkMode}
      />
    ));
  }
}

export const TrelloList = (props) => {
  const { title, listID, index, isDarkMode } = props;
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

  const borderColor =
    listID === '2'
      ? 'rgb(0,92,175)'
      : listID === '1'
      ? 'rgb(181,73,91)'
      : listID === '0'
      ? 'rgb(105,176,172)'
      : 'rgb(90,90,90)';

  const renderTitle = () => {
    const editable = listID !== '0' && listID !== '1' && listID !== '2';
    return !editing ? (
      <h3
        style={{
          borderLeft: '10px solid',
          borderLeftColor: borderColor,
          paddingLeft: '16px',
          color: isDarkMode ? '#efeff4' : '#37352f',
          cursor: 'pointer',
          overflow: 'hidden',
          cursor: editable ? 'pointer' : 'default',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
        onClick={editable ? toggleEditing : undefined}
      >
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
            backgroundColor: isDarkMode && '#5d5d63',
            boxShadow:
              isDarkMode && 'inset -6px -6px 16px rgba(60, 60, 60, 0.5), inset 6px 6px 16px rgba(46, 50, 56, 0.5)',
            color: isDarkMode && '#efeff4',
            border: 'none',
            fontSize: '1.1em',
            fontWeight: '700',
            padding: '16px',
            marginTop: '3px',
            marginBottom: '32px',
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
              minHeight: '50px',
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
            <TrelloForm listID={listID} isDarkMode={isDarkMode} />
          </div>
          <div {...provided.dragHandleProps}>
            <Droppable droppableId={String(listID)}>
              {(provided, snapshot) => (
                <List
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  isDraggingOver={snapshot.isDraggingOver}
                  isDarkMode={isDarkMode}
                >
                  <InnerList cards={props.cards} listID={listID} isDarkMode={isDarkMode} />
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
