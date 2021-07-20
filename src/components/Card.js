import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { cardsRef } from '../firebase';
import EditCardModal from "./EditCardModal";

class Card extends React.Component {
  state = {
    modalOpen: false
  }
  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen })
  }
  deleteCard = async e => {
    try{
       e.preventDefault()
       const cardId = this.props.data.id
       const card = await cardsRef.doc(cardId)
       card.delete()
=======
import { cardsRef } from "../firebase";

class Card extends React.Component {

  deleteCard = async e => {
    try{
      e.preventDefault()
      const cardId = this.props.data.id
      const card = await cardsRef.doc(cardId)
      card.delete()
>>>>>>> 844edb7 (Deleting cards and lists from Firebase)
    } catch (error) {
      console.error('Error deleting card: ', error)
    }
  }
  render() {
    return (
<<<<<<< HEAD
      <React.Fragment>
      <div className="card">
       <div className="card-body">
         <p onClick={this.toggleModal}>{this.props.data.text}</p>
         <span onClick={this.deleteCard}>&times</span>
       </div>
        </div>
       <EditCardModal
         modalOpen={this.state.modalOpen}
         toggleModal={this.toggleModal} />
      </React.Fragment>
=======
      <div className="card">
       <div className="card-body">
         <p>{this.props.data.text}</p>
         <span onClick={this.deleteCard}>&times;</span>
       </div>
      </div>
>>>>>>> 844edb7 (Deleting cards and lists from Firebase)
    )
  }
}

Card.propTypes = {
  data: PropTypes.object.isRequired
}

export default Card;
