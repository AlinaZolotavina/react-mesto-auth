import React from 'react';

function Form({ popupClassName, formName, onSubmit, title, onChange, buttonText }) {
    return (
        <form className={`form form_place_${popupClassName}`} name={formName} noValidate="" onSubmit={onSubmit}>
            <h2 className={`form__title form__title_place_${popupClassName}`}>{title}</h2>
            <label className="form__item">
                <input
                    className={`form__input form__input_type_email form__input_place_${popupClassName}`}
                    id="email-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value="" 
                    onChange={onChange}
                />
                <span className="form__input-error email-input-error">Вы пропустили это поле.</span>
            </label>
            <label className="form__item">
                <input 
                    className={`form__input form__input_type_password form__input_place_${popupClassName}`}
                    id="password-input"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    required
                    value=""
                    onChange={onChange}
                />
                <span className="form__input-error password-input-error">Вы пропустили это поле.</span>
            </label>
            <button
                className={`button button_type_submit button_place_${popupClassName}`} type="submit">{buttonText}</button>
        </form>
    )
};

export default Form;