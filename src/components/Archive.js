import React from 'react';
import TinyFooter from './TinyFooter';
import styled from 'styled-components';
import styles from './TodoForm.module.css';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ArchiveCard from './ArchiveCard';

function Archive(props) {
    const { lists } = props;
    return (
        <div
            style={{
                height: '90vh',
                
                backgroundColor: '#eeeeef',
            }}
        >
            <div style={{ padding: '16px 48px', color: '#606060',overflow:'auto' }}>
                <div style={{marginBottom:'16px'}}>
                    <h3 style={{color:'#303030'}}>Archive 🗂</h3>
                    <NavLink exact to="/">
                        <IconButton>
                            <ArrowBackOutlinedIcon />
                        </IconButton>
                    </NavLink>
                </div>
                {lists.map((list) => list.id === '3' && list.cards.map((card) => <ArchiveCard key={card.id} text={card.text} id={card.id} emoji={card.emoji}/>))}
            </div>
            <TinyFooter />
        </div>
    );
}

const mapStateToProps = (state) => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(Archive);
