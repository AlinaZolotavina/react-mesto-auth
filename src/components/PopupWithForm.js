import React from 'react';

function PopupWithForm({ name, title, formName, children, buttonText, isOpen, onClose, onSubmit }) {  
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form className="form" name={formName} noValidate onSubmit={onSubmit}>
          {children}
          <button className="button button_type_submit" type="submit">{buttonText}</button>
        </form>
        <button className="popup__close-btn" onClick={onClose}></button>
      </div>
    </div>
  )
};

export default PopupWithForm;