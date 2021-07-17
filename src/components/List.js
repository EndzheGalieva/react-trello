import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import { cardsRef, listsRef } from '../firebase';

class List extends React.Component {
  state = {
    currentCards: []
  }
  componentDidMount() {
    this.fetchCards(this.props.list.id)
  }

  fetchCards = async listId => {
    try {
      const cards = await cardsRef
        .where('card.listId', '==', listId)
        .orderBy('card.createdAt')
        .get()
        cards.forEach(card => {
        const data = card.data().card
        const cardObj = {
          id: card.id,
          ...data
        }
        this.setState({ currentCards: [...this.state.currentCards, cardObj] })
       })
    } catch(error) {
      console.error('Error fetching card', error)
    }
  }
  nameInput = React.createRef()
  createNewCard = async (e) => {
    try {
      e.preventDefault()
      const card = {
        text: this.nameInput.current.value,
        listId: this.props.list.id,
        labels: [],
        createAt: new Date()
      }
      if (card.text && card.listId) {
       await cardsRef.add({ card })
      }
      this.nameInput.current.value = ''
      console.log('new card added ' + card.text)
    } catch(error) {
      console.error('Error creating new card: ', error)
    }
  }

  deleteList = () => {
    const listId = this.props.list.id
    this.props.deleteList(listId)
  }
  render() {
    return (
      <div className="list">
        <div className="list-header">
          <p>{this.props.list.title}</p>
          <span onClick={this.deleteList}>&times;</span>
        </div>
        {Object.keys(this.state.currentCards).map(key => (
         <Card
           key={key}
           data={this.state.currentCards[key]} />
        ))}
        <form
          onSubmit={this.createNewCard}
          className="new-card-wrapper">
          <input
          type="text"
          ref={this.nameInput}
          name="name"
          placeholder=" + New card" />
        </form>
      </div>
    )
  }
}

List.propTypes = {
  list: PropTypes.object.isRequired,
  deleteList: PropTypes.func.isRequired
}

export default List;
