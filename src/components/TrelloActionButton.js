import React from 'react';
import Icon from '@material-ui/core/Icon';
import { Button, Card, IconButton } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined'
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

    renderForm = () => {
        const { list } = this.props;
        const placeholder = list ? 'Enter list title...' : 'Enter a title for this card...';
        const buttonTitle = list ? 'Add List' : 'Add Card';
        return (
            <div style={{ width:'22%', marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <form onSubmit={this.handleAddList}>
                    <input
                        placeholder={placeholder}
                        type="text"
                        autoFocus
                        onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        style={{
                            resize: 'none',
                            width: '100%',
                            overflow: 'hidden',
                            outline: 'none',
                            border: 'none',
                        }}
                    />
                    <button className={classes.Button}>
                        Add
                    </button>
                </form>
                
            </div>
        );
    };

    renderAddButton = () => {
        const { list } = this.props;
        const buttonText = list ? 'Add your list' : 'Add another card';
        return (
            <div style={{ width:'22%', marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button onClick={this.openForm} style={{ padding: '10px 40px' }}>
                    {buttonText}
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
