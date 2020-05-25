import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteCard, toggleCard, editCard } from '../actions/cardsActions';
import TextArea from 'react-textarea-autosize';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const Container = styled.div`
  background-color: ${(props) => (props.isDragging ? '#89b7b7' : '#fffefb')};
  margin-bottom: 8px;
  border-radius: 5px;
  box-shadow: ${(props) => (props.isDragging ? '0px 5px 5px rgba(0,0,0,0.3)' : 'none')};
  word-wrap: break-word;
`;

const TrelloCard = (props) => {
  const { text, id, index, completed, isTiny, isTask, isGoal } = props;
  const [editing, setEditing] = useState(false);
  const [todo, setTodo] = useState(text);
  const [hover, setHover] = useState(false);

  const handleDelete = () => {
    const { dispatch, id } = props;
    dispatch(deleteCard(id));
  };

  const toggleComplete = () => {
    const { dispatch, id } = props;
    dispatch(toggleCard(id));
  };

  const toggleForm = () => {
    setEditing(!editing);
  };

  const handleHover = () => {
    setHover(true);
  };

  const handleHoverLeave = () => {
    setHover(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id } = props;
    dispatch(editCard(id, todo));

    toggleForm();
  };

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const renderTinyCard = () => {
    return (
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverLeave}
        onClick={toggleComplete}
        style={{ marginBottom: '20px' }}
      >
        <CardContent style={{ marginBottom: '-20px' }}>
          <Typography
            gutterBottom
            style={{
              opacity: completed && '0.2',
              textDecoration: completed && 'line-through',
              transition: 'all 0.2s',
            }}
          >
            {text}
          </Typography>
        </CardContent>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDelete} style={{ transition: 'opacity 0.2s', opacity: hover ? 1 : 0 }}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </div>
      </div>
    );
  };
  const renderGoalCard = () => {
    return (
      <div
        onMouseOver={handleHover}
        onMouseOut={handleHoverLeave}
        style={{
          backgroundColor: '#efeeee',
          boxShadow: 'inset -6px -6px 16px rgba(255, 255, 255, 0.5), inset 6px 6px 16px rgba(209, 205, 199, 0.5)',
          marginBottom: '20px',
        }}
      >
        <CardContent style={{ marginBottom: '-20px' }}>
          <Typography
            gutterBottom
            style={{
              opacity: completed && '0.2',
              textDecoration: completed && 'line-through',
              transition: 'all 0.2s',
            }}
          >
            {text}
          </Typography>
        </CardContent>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={toggleForm} style={{ transition: 'opacity 0.2s', opacity: hover ? 1 : 0 }}>
            <EditOutlinedIcon />
          </IconButton>
          <IconButton onClick={handleDelete} style={{ transition: 'opacity 0.2s', opacity: hover ? 1 : 0 }}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </div>
      </div>
    );
  };
  const renderCard = () => {
    return (
      <div
        onMouseOver={handleHover}
        onMouseOut={handleHoverLeave}
        style={{
          // boxShadow: 'rgba(255, 255, 255, 0.5) -6px -6px 16px, rgba(209, 205, 199, 0.5) 6px 6px 16px',
          boxShadow: 'rgba(0,0,0,0.1) 0 4px 4px',
          marginBottom: '20px',
        }}
      >
        <CardContent style={{ marginBottom: '-20px' }}>
          <Typography
            gutterBottom
            style={{
              opacity: completed && '0.2',
              textDecoration: completed && 'line-through',
              transition: 'all 0.2s',
            }}
          >
            {text}
          </Typography>
        </CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton onClick={toggleComplete}>
            <DoneOutlineOutlinedIcon />
          </IconButton>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={toggleForm} style={{ transition: 'opacity 0.2s', opacity: hover ? 1 : 0 }}>
              <EditOutlinedIcon />
            </IconButton>
            <IconButton onClick={handleDelete} style={{ transition: 'opacity 0.2s', opacity: hover ? 1 : 0 }}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    );
  };
  const renderCustomizedCard = () => {
    return (
      <div
        onMouseOver={handleHover}
        onMouseOut={handleHoverLeave}
        style={{
          // boxShadow: 'rgba(255, 255, 255, 0.5) -6px -6px 16px, rgba(209, 205, 199, 0.5) 6px 6px 16px',
          boxShadow: 'rgba(0,0,0,0.1) 0 4px 4px',
          marginBottom: '20px',
        }}
      >
        <CardContent style={{ marginBottom: '-20px' }}>
          <Typography
            gutterBottom
            style={{
              opacity: completed && '0.2',
              textDecoration: completed && 'line-through',
              transition: 'all 0.2s',
            }}
          >
            {text}
          </Typography>
        </CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton onClick={toggleComplete} style={{ transition: 'opacity 0.2s', opacity: hover ? 1 : 0 }}>
            <DoneOutlineOutlinedIcon />
          </IconButton>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={toggleForm} style={{ transition: 'opacity 0.2s', opacity: hover ? 1 : 0 }}>
              <EditOutlinedIcon />
            </IconButton>
            <IconButton onClick={handleDelete} style={{ transition: 'opacity 0.2s', opacity: hover ? 1 : 0 }}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    );
  };
  const handleFocus = (e) => {
    e.target.select();
  };

  const renderForm = () => {
    return (
      <div style={{ marginBottom: '20px', backgroundColor: isGoal && '#efeeee' }}>
        <form>
          <TextArea
            autoFocus
            onFocus={handleFocus}
            onBlur={handleSubmit}
            value={todo}
            onChange={handleInputChange}
            style={{
              resize: 'none',
              width: '100%',
              overflow: 'hidden',
              outline: 'none',
              border: 'none',
              fontSize: 'inherit',
              padding: '16px',
              fontSize: '1rem',
              lineHeight: '1.5',
              letterSpacing: '0.00938em',
              marginBottom: '-15px',
              backgroundColor: isGoal && '#efeeee',
            }}
          />
        </form>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleSubmit} style={{}}>
            <SaveOutlinedIcon />
          </IconButton>
          <IconButton onClick={toggleForm}>
            <CancelOutlinedIcon />
          </IconButton>
        </div>
      </div>
    );
  };
  return editing ? (
    renderForm()
  ) : (
    <Draggable draggableId={String(id)} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
          // style={{opacity: completed && '0.4'}}
        >
          {isTiny ? renderTinyCard() : isGoal ? renderGoalCard() : isTask? renderCard() : renderCustomizedCard()}
        </Container>
      )}
    </Draggable>
  );
};

const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};

export default connect()(TrelloCard);
