import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({ card, isOpen, onClose, onDeleteCard }) {
  const currentUser = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    if(card.owner._id === currentUser._id) {
        onDeleteCard(card);
    } 
  };

  return (
    <PopupWithForm
      name="confirmation"
      title="Вы уверены?"
      formName="confirmForm"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />          
  )
};

export default DeleteCardPopup;