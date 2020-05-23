import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import styles from './TodoForm.module.css';

const Footer = styled.div`
    height: 6vh;
    background-color: #f7f7f7;
    display: flex;
    justify-content: flex-end;
    color: #202020;
    align-items: center;
    padding-right: 10px;
    font-weight: 700;
    z-index: 10;
    text-decoration: none;
    bottom:0;
    top:auto;
    width:100%;
    position:fixed;
`;


export default class TinyFooter extends Component {
    render() {
        return (
            <Footer>
                <NavLink exact to='/archive' activeClassName={styles.activeLink}>
                    <button className={styles.Archive} style={{marginTop:'2px'}}>🗂 Archive</button>
                </NavLink>
                <NavLink exact to='/' activeClassName={styles.activeLink}><p className={styles.Title} id={styles.title} style={{marginRight:'32px'}}>💡📝🎖 Tiny</p></NavLink>
            </Footer>
        );
    }
}
