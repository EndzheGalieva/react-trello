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

<<<<<<< HEAD
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
=======
  deleteList = async () => {
    try {
      const listId = this.props.list.id
      const cards = await cardsRef
        .where('card.listId', '==', listId)
        .get()
        if(cards.docs.length !== 0) {
          cards.forEach(card => {
            card.ref.delete()
          })
        }
        const list = await listsRef.doc(listId)
        list.delete()
    } catch(error) {
      console.error('Error deleting list: ', error)
    }
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
    } catch (error) {
      console.error('Error fetching cards', error)
>>>>>>> 844edb7 (Deleting cards and lists from Firebase)
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
  updateList = async e => {
    try {
      const listId = this.props.list.id
      const newTitle = e.currentTarget.value
      const list = await listsRef.doc(listId)
      list.update({ 'list.title': newTitle })
    }catch(error) {
      console.error('Error updating list: ', error)
    }
  }
  render() {
    return (
      <div className="list">
        <div className="list-header">
<<<<<<< HEAD
          {/*<p>{this.props.list.title}</p>*/}
          <input
          type="text"
          name="listTitle"
          onChange={this.updateList}
          defaultValue={this.props.list.title} />
=======
          <p>{this.props.list.title}</p>
>>>>>>> 844edb7 (Deleting cards and lists from Firebase)
          <span onClick={this.deleteList}>&times;</span>
        </div>
        {Object.keys(this.state.currentCards).map(key => (
         <Card
           key={key}
<<<<<<< HEAD
           data={this.state.currentCards[key]} />
=======
           data={this.props.state.currentCards[key]} />
>>>>>>> 844edb7 (Deleting cards and lists from Firebase)
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
