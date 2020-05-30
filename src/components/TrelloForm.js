import React from 'react';
import Icon from '@material-ui/core/Icon';
import { Button, Card } from '@material-ui/core';
import TextArea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addList } from '../actions';
import { addCard } from '../actions/cardsActions';
import classes from './TodoForm.module.css';

class TrelloActionButton extends React.Component {
  state = { formOpen: false, text: '' };

  openForm = () => {
    this.setState({ formOpen: true });
  };

  closeForm = () => {
    this.setState({ formOpen: false });
  };

  handleInputChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;
    if (text) {
      dispatch(addCard(listID, text));
    }
    this.setState({ text: '' });
  };

  render() {
    const placeholder = 'Add new card...';
    const { isDarkMode } = this.props;
    return (
      <form
        onSubmit={this.handleAddCard}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <input
          placeholder={placeholder}
          onBlur={this.closeForm}
          value={this.state.text}
          onChange={this.handleInputChange}
          style={{
            resize: 'none',
            overflow: 'hidden',
            outline: 'none',
            border: 'none',
            marginRight: '10%',
            color: isDarkMode && '#efeff4',
            boxShadow: isDarkMode && 'none',
            backgroundColor: isDarkMode && '#3a3a3c',
          }}
        />
        <Button
          onClick={this.handleAddCard}
          style={{
            padding: '13px 40px',
            color: '#606060',
            boxShadow: isDarkMode && 'none',
            backgroundColor: isDarkMode && '#3a3a3c',
          }}
        >
          Add
        </Button>
      </form>
    );
  }
}

export default connect()(TrelloActionButton);
