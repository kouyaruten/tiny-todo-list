import React, { useEffect } from 'react';
import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions/cardsActions';
import styled from 'styled-components';
import TinyFooter from './TinyFooter';
import { HashRouter, Route, Switch, Link, Router, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Archive from './Archive';

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #efeeee;
    height:90vh;    
`;

const App = (props) => {

    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(props.lists));
    });


    const onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result;
        if (!destination) {
            return;
        }
        props.dispatch(
            sort(source.droppableId, destination.droppableId, source.index, destination.index, draggableId, type)
        );
    };

    const { lists } = props;

    const Routes = withRouter(({location}) => (
<TransitionGroup>
            <CSSTransition  key={location.pathname} classNames="fade" timeout={200}>
                    <Switch location={location}>
                        <Route exact path="/" render={() => (
                            <>
                                <DragDropContext onDragEnd={onDragEnd}>
                                        <Droppable droppableId="all-lists" direction="horizontal" type="list">
                                            {(provided) => (
                                                <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
                                                    {lists.map((list, index) => (
                                                        list.id!=='3' && 
                                                        <TrelloList
                                                            listID={list.id}
                                                            key={list.id}
                                                            title={list.title}
                                                            cards={list.cards}
                                                            index={index}
                                                        />
                                                    ))}
                                                    {provided.placeholder}
                                                    {lists.length < 5 && <TrelloActionButton list />}
                                                </ListContainer>
                                            )}
                                        </Droppable>
                                </DragDropContext>
                                <TinyFooter />
                            </>
                        )}/>
                        <Route exact path="/archive" render={() => <Archive />} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
    ));
    
    return (
        <HashRouter>
            <Routes />
        </HashRouter>
    );
};

const mapStateToProps = (state) => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(App);
