import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE'

class App extends Component {
  
  state = {
    store: STORE,
    
  };

  handleAdd = (id) => {
    const {lists, allCards} = this.state.store;
    const newCard = this.newRandomCard();
    const newList = this.state.store.lists.map (list => {
      if(list.id === id) {
        list.cardIds.push(newCard.id);
  
      }
      return list;
    })
    this.setState({
      store:{
        lists: newList,
        allCards: {...this.state.store.allCards, 
        [newCard.id]: newCard}
      }
    })  
    console.log(this.state.store)
  }

  handleDelete = () => {
    console.log('delete')
  }

  newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }

   omit (obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
          key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
    );
  }

  render() {
    const {store} = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              id={list.id}
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onClickDelete= {this.handleDelete}
              onClickAdd= {this.handleAdd}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
