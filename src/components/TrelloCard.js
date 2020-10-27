import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
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
  background-color: ${(props) => (props.isDarkMode ? '#5d5d63' : props.isDragging ? '#89b7b7' : '#fffefb')};
  color: ${(props) => props.isDarkMode && '#efeff4'};
  margin-bottom: 8px;
  border-radius: 5px;
  box-shadow: ${(props) => (props.isDragging ? '0px 5px 5px rgba(0,0,0,0.3)' : 'none')};
  word-wrap: break-word;
  transition: all 0.2s;
`;

const TrelloCard = (props) => {
  const { text, id, index, completed, isTiny, isTask, isGoal, isDarkMode } = props;
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
    setTodo(props.text);
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
        onMouseOver={handleHover}
        onMouseOut={handleHoverLeave}
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
          <IconButton
            onClick={handleDelete}
            style={{
              transition: 'opacity 0.2s',
              opacity: hover ? 1 : 0,
              boxShadow: isDarkMode && '-6px -6px 16px rgba(60, 60, 60, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)',
            }}
          >
            <DeleteOutlineOutlinedIcon style={{ color: isDarkMode && '#e9ecef' }} />
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
          backgroundColor: isDarkMode ? '#3a3a3c' : '#efeeee',
          boxShadow: isDarkMode
            ? 'inset -6px -6px 16px rgba(40, 40, 40, 0.5), inset 6px 6px 16px rgba(46, 50, 56, 0.5)'
            : 'inset -6px -6px 16px rgba(255, 255, 255, 0.5), inset 6px 6px 16px rgba(209, 205, 199, 0.5)',
          marginBottom: '20px',
          // border: isDarkMode && '2px solid #606060',
          borderRadius: 5,
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
          <IconButton
            onClick={toggleForm}
            style={{
              transition: 'opacity 0.2s',
              opacity: hover ? 1 : 0,
              boxShadow: isDarkMode && '-6px -6px 16px rgba(40, 40, 40, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)',
              color: isDarkMode && '#efeff4',
            }}
          >
            <EditOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={handleDelete}
            style={{
              transition: 'opacity 0.2s',
              opacity: hover ? 1 : 0,
              boxShadow: isDarkMode && '-6px -6px 16px rgba(40, 40, 40, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)',
              color: isDarkMode && '#efeff4',
            }}
          >
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
          boxShadow: 'rgba(0,0,0,0.2) 0 4px 4px',
          marginBottom: '20px',
          borderRadius: 4,
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
          {completed ? (
            <IconButton
              onClick={toggleComplete}
              style={{
                boxShadow: isDarkMode && '-6px -6px 16px rgba(60, 60, 60, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)',
                color: isDarkMode && '#efeff4',
                opacity: 0.4,
              }}
            >
              <CheckCircleIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={toggleComplete}
              style={{
                boxShadow: isDarkMode && '-6px -6px 16px rgba(60, 60, 60, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)',
                color: isDarkMode && '#efeff4',
              }}
            >
              <DoneOutlineOutlinedIcon />
            </IconButton>
          )}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              onClick={toggleForm}
              style={{
                transition: 'opacity 0.2s',
                opacity: hover ? 1 : 0,
                boxShadow: isDarkMode && '-6px -6px 16px rgba(60, 60, 60, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)',
                color: isDarkMode && '#efeff4',
              }}
            >
              <EditOutlinedIcon />
            </IconButton>
            <IconButton
              onClick={handleDelete}
              style={{
                transition: 'opacity 0.2s',
                opacity: hover ? 1 : 0,
                boxShadow: isDarkMode && '-6px -6px 16px rgba(60, 60, 60, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)',
                color: isDarkMode && '#efeff4',
              }}
            >
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
          boxShadow: 'rgba(0,0,0,0.1) 0 4px 4px',
          marginBottom: '20px',
          borderRadius: 4,
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
          {completed ? (
            <IconButton
              onClick={toggleComplete}
              style={{
                boxShadow: isDarkMode && '-6px -6px 16px rgba(60, 60, 60, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)',
                color: isDarkMode && '#efeff4',
                opacity: hover ? 0.4 : 0,
              }}
            >
              <CheckCircleIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={toggleComplete}
              style={{
                boxShadow: isDarkMode && '-6px -6px 16px rgba(60, 60, 60, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)',
                color: isDarkMode && '#efeff4',
                opacity: hover ? 1 : 0,
              }}
            >
              <DoneOutlineOutlinedIcon />
            </IconButton>
          )}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              onClick={toggleForm}
              style={{
                transition: 'opacity 0.2s',
                opacity: hover ? 1 : 0,
                boxShadow: isDarkMode && '-6px -6px 16px rgba(60, 60, 60, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)',
                color: isDarkMode && '#efeff4',
              }}
            >
              <EditOutlinedIcon />
            </IconButton>
            <IconButton
              onClick={handleDelete}
              style={{
                transition: 'opacity 0.2s',
                opacity: hover ? 1 : 0,
                boxShadow: isDarkMode && '-6px -6px 16px rgba(60, 60, 60, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)',
                color: isDarkMode && '#efeff4',
              }}
            >
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
      <div
        style={{ marginBottom: '20px', backgroundColor: isDarkMode ? '#5d5d63' : isGoal && '#efeeee', borderRadius: 5 }}
      >
        <form onSubmit={handleSubmit}>
          <input
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
              borderRadius: 5,
              color: isDarkMode && '#efeff4',
              backgroundColor: isDarkMode ? '#5d5d63' : isGoal && '#efeeee',
              boxShadow: isDarkMode && 'none',
            }}
          />
        </form>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            onClick={handleSubmit}
            style={{
              boxShadow: isDarkMode && '-6px -6px 16px rgba(60, 60, 60, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)',
              color: isDarkMode && '#efeff4',
            }}
          >
            <SaveOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={toggleForm}
            style={{
              boxShadow: isDarkMode && '-6px -6px 16px rgba(60, 60, 60, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)',
              color: isDarkMode && '#efeff4',
            }}
          >
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
          isDarkMode={isDarkMode}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
          // style={{opacity: completed && '0.4'}}
        >
          {isTiny ? renderTinyCard() : isGoal ? renderGoalCard() : isTask ? renderCard() : renderCustomizedCard()}
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
