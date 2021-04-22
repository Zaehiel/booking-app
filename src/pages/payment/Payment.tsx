import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaArrowLeft, FaRegCheckCircle } from "react-icons/fa";
import { SiMastercard, SiVisa, SiAmericanexpress } from "react-icons/si";
import { isCreditCardValid, getCreditCardType } from 'utils/creditCardValidator';
import { useHistory } from "react-router-dom";
import { useStoreContext } from 'store/Store';
import { cardErrorMessage } from 'utils/constants';

import './Payment.css';

function Payment() {
  const { state } = useStoreContext();
  const [cardNumber, setCardNumber] = useState('');
  const history = useHistory();

  const handleCardNumberChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(target.value);
  }

  const submit = () => {
    if (!isCreditCardValid(cardNumber)) {
      return;
    }
    const data = {
      cardNumber,
      room: state.room,
      startDate: state.startDate,
      endDate: state.endDate,
    }

    fetch("/booking", {
      method: "POST", 
      body: JSON.stringify(data)
    });
    
    history.push('/confirmed')
  }

  const getCreditCardIcon = () => {
    switch(getCreditCardType(cardNumber)) {
      case 'American Express':
        return <SiAmericanexpress />;
      case 'Mastercard':
        return <SiMastercard />;
      case 'Visa':
        return <SiVisa />;
    }
  }

  const isCardSupported = (): boolean => {
    const cardType = getCreditCardType(cardNumber);
    return (cardType !== cardErrorMessage.INVALID && cardType !== cardErrorMessage.NOT_SUPPORTED);
  }

  const showSubmitButton = () => {
    if (
      cardNumber.length < 1
      || !isCreditCardValid(cardNumber)
      || !isCardSupported()
      || !state.room
    ) {
      return;
    }

    return (
      <button className="button" onClick={submit}>
        Confirm payment
        <i className="right">{ getCreditCardIcon() }</i>
      </button>
    );
  };

  return (
    <div className="page">
      <h1>Finalise booking</h1>
      <div className="payment">
        <div className="payment__info">
          <label htmlFor="cardNumber">Enter your credit card number</label>
          <input
            className={`default-input`}
            id="cardNumber"
            type="text"
            onChange={handleCardNumberChange}
          />
        </div>
      </div>
      <div className="page-actions">
        <Link className="button" to="/rooms">
          <i className="left"><FaArrowLeft /></i>
          Back
        </Link>
       { showSubmitButton() }
      </div>
    </div>
  );
}

export default Payment;
