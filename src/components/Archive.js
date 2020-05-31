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
  const { lists, isDarkMode } = props;
  console.log(isDarkMode);

  return (
    <div
      style={{
        height: '100%',
        position: 'absolute',
        width: '100%',
        backgroundColor: isDarkMode ? '#2c2c2e' : '#eeeeef',
        overflow: 'auto',
      }}
    >
      <div style={{ padding: '16px 48px', color: '#606060', overflow: 'auto' }}>
        <div style={{ marginBottom: '16px' }}>
          <h3
            style={{
              color: isDarkMode ? '#e9ecef' : '#303030',
              borderLeft: '10px solid rgb(217,171,66)',
              paddingLeft: '16px',
            }}
          >
            Archive 🗂
          </h3>
          <NavLink exact to="/">
            <IconButton
              style={{
                boxShadow: isDarkMode && '-6px -6px 16px rgba(0, 0, 0, 0.5), 6px 6px 16px rgba(46, 50, 56, 0.5)',
                border: isDarkMode && '1px solid #efeff4',
              }}
            >
              <ArrowBackOutlinedIcon style={{ color: isDarkMode && '#e9ecef' }} />
            </IconButton>
          </NavLink>
        </div>
        {lists.map(
          (list) =>
            list.id === '3' &&
            list.cards.map((card) => (
              <ArchiveCard key={card.id} text={card.text} id={card.id} emoji={card.emoji} isDarkMode={isDarkMode} />
            ))
        )}
      </div>
      <TinyFooter />
    </div>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(Archive);
