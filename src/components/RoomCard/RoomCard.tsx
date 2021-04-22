import React from 'react';
import './RoomCard.css';
import { MdEventAvailable, MdBlock } from "react-icons/md";

function RoomCard(props) {
  return (
    <div className={
      `room-card
        ${props.available ? 'room-card--available' : 'room-card--unavailable'}
        ${props.isSelected ? 'room-card--selected' : ''}`
      }
      onClick={props.onClick}
    >
      <div className="room-card__image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="room-card__content">
        <div className="room-card__title">
          {props.name}
        </div>
        <div className="room-card__status">
          {
            props.available
            ? <MdEventAvailable />
            : <MdBlock />
          }
        </div>
      </div>
    </div>
  )
}

export default RoomCard;