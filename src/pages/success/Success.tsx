import React, { useState } from 'react';
import { useStoreContext } from 'store/Store';
import { rooms } from 'utils/constants';


function Success() {
  const { state } = useStoreContext();

  const getSelectedRoomName = () => {
    const room = rooms.find(room => room.id === state.room);

    return room?.name;
  };

  return (
    <div className="page">
      <h1>Your booking is now a reality!</h1>
      <div className="booking-details">
        <h3>Staying at `{getSelectedRoomName()}`</h3>
        <h3>Check-in: {state.startDate}</h3>
        <h3>Check out: {state.endDate}</h3>
      </div>
    </div>
  );
}

export default Success;
