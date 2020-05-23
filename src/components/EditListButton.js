import React from 'react';
import { connect } from 'react-redux';
import { editList } from '../actions';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { Component } from 'react';

export default class EditListButton extends Component {
    state = { formOpen: false, text: '' };
    handleEditList = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;
        if (text) {
            dispatch(editList(text, listID));
        }
        this.setState({ text: '' });
    };
    handleInputChange = (e) => {
        this.setState({ text: e.target.value });
    };
    render() {
        return <EditOutlinedIcon style={{color:'#606060'}}/>;
    }
}
