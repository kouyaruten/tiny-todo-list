import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Switch from '@material-ui/core/Switch';
import { toggleTheme } from '../actions/themeAction';
import { connect } from 'react-redux';

const Footer = styled.div`
  height: 6vh;
  background-color: ${(props) => (props.isDarkMode ? '#1c1c1e' : '#f7f7f7')};
  display: flex;
  justify-content: space-between;
  color: ${(props) => (props.isDarkMode ? '#efeff4' : '#202020')};
  align-items: center;
  padding-right: 40px;
  font-weight: 700;
  z-index: 10;
  text-decoration: none;
  bottom: 0;
  width: 100%;
  position: fixed;
`;

class TinyFooter extends Component {
  state = { darkmode: this.props.theme.darkmode };
  handleChange = (event) => {
    this.setState({ darkmode: event.target.checked });
    this.props.dispatch(toggleTheme());
  };
  render() {
    return (
      <Footer isDarkMode={this.state.darkmode}>
        <div style={{ marginLeft: 32 }}>
          <span style={{ opacity: this.state.darkmode ? '1' : '0.4' }}>🌙</span>

          <Switch
            checked={this.state.darkmode}
            onChange={this.handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: 32 }}>
          <NavLink
            exact
            to="/archive"
            style={this.state.darkmode ? styles.linkDark : styles.link}
            activeStyle={this.state.darkmode ? styles.linkDarkActive : styles.linkActive}
          >
            🗂 Archive
          </NavLink>
          <NavLink
            exact
            to="/"
            style={this.state.darkmode ? styles.linkDark : styles.link}
            activeStyle={this.state.darkmode ? styles.linkDarkActive : styles.linkActive}
          >
            💡📝🎖 Tiny
          </NavLink>
        </div>
      </Footer>
    );
  }
}
const mapStateToProps = (state) => ({
  theme: state.theme,
});

const styles = {
  link: {
    color: '#606060',
    opacity: '0.4',
    padding: '5px 20px 5px 20px',
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 5,
    '&:hover': {
      backgroundColor: '#000000',
    },
  },
  linkActive: {
    opacity: 1,
    color: '#606060',
    boxShadow: 'inset -6px -6px 16px rgba(255, 255, 255, 0.5), inset 6px 6px 16px rgba(209, 205, 199, 0.5)',
  },
  linkDark: {
    color: '#efeff4',
    opacity: '0.4',
    padding: '5px 20px 5px 20px',
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  linkDarkActive: {
    opacity: 1,
    color: '#efeff4',
    boxShadow: 'inset -6px -6px 16px rgba(40, 40, 40, 0.5), inset 6px 6px 16px rgba(46, 50, 56, 0.5)',
    backgroundColor: '#3c3c3e',
  },
};
export default connect(mapStateToProps)(TinyFooter);
