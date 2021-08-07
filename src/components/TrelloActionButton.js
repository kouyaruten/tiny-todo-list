import React from 'react';
import Icon from '@material-ui/core/Icon';
import { Button, Card, IconButton } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import TextArea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addList } from '../actions';
import { addCard } from '../actions/cardsActions';
import classes from './TodoForm.module.css';

class TrelloActionButton extends React.Component {
  state = { formOpen: false, text: '', hover: false };

  openForm = () => {
    this.setState({ formOpen: true });
  };

  closeForm = () => {
    this.setState({ formOpen: false });
  };

  handleInputChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;
    if (text) {
      dispatch(addList(text));
    }
    this.setState({ text: '' });
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;
    if (text) {
      dispatch(addCard(listID, text));
    }
    this.setState({ text: '' });
  };

  handleListenESC = (e) => {
    if (e.keyCode === 27) {
      this.closeForm()
    }
  }

  renderForm = () => {
    const { list, isDarkMode } = this.props;
    const placeholder = list ? 'Enter list title...' : 'Enter a title for this card...';
    const buttonTitle = list ? 'Add List' : 'Add Card';
    return (
      <div style={{ width: '22%', marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <form onSubmit={this.handleAddList}>
          <input
            placeholder={placeholder}
            type="text"
            autoFocus
            value={this.state.text}
            onChange={this.handleInputChange}
            onKeyDown={this.handleListenESC}
            style={{
              resize: 'none',
              overflow: 'hidden',
              outline: 'none',
              border: 'none',
              backgroundColor: isDarkMode && '#3a3a3c',
              boxShadow: isDarkMode && 'none',
              marginRight: '10%',
            }}
          />
          <Button
            onClick={this.handleAddList}
            style={{
              padding: '13px 40px',
              color: '#606060',
              boxShadow: isDarkMode && 'none',
              backgroundColor: isDarkMode && '#3a3a3c',
              fontSize: '0.9em',
            }}
          >
            Add
          </Button>
        </form>
      </div>
    );
  };

  renderAddButton = () => {
    const { list, isDarkMode } = this.props;
    const buttonText = list ? 'Add your list' : 'Add another card';
    return (
      <div style={{ width: '22%', marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button
          onClick={this.openForm}
          style={{
            padding: '10px 40px',
            color: isDarkMode && '#efeff4',
            boxShadow: isDarkMode && ' -6px -6px 16px rgba(20, 20, 20, 0.5),  6px 6px 16px rgba(46, 50, 56, 0.5)',
            backgroundColor: isDarkMode && '#3a3a3c',
          }}
        >
          <span style={{ fontSize: '0.875rem', }}>{buttonText}</span>
        </Button>
      </div>
    );
  };
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openForButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
  },
  formButtonGroup: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
  },
  addListButton: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
    color: '#909090',
    backgroundColor: '#efeeee',
    marginTop: '5.5rem',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: '#eeeeee',
    },
    transition: 'all 0.2s',
  },
};

export default connect()(TrelloActionButton);
