import React , { useState, useEffect }from 'react';
import { Link } from "react-router-dom";
import { api, ResponseItem, Response } from 'utils/api';
import RoomCard from 'components/RoomCard/RoomCard';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useStoreContext } from 'store/Store';
import { ACTION } from 'store/Reducer';
import './Rooms.css';

function Rooms() {
  const { state, dispatch } = useStoreContext();
  const [rooms, setRooms] = useState<ResponseItem[]>([]);

  useEffect(() => {
      api().then((res: Response) => setRooms(res.data));
  }, []);

  const handleCardClick = (room) => () => {
    if (room.available) {
      dispatch({
        type: ACTION.SET_ROOM,
        payload: room.id,
      });
    }
  }

  return (
    <div className="page">
      <h1>Room selection</h1>
      <div className="rooms">
        {
          rooms.length > 0
          ? rooms.map((room, index) => {
              return (
              <RoomCard
                {...room}
                key={index}
                isSelected={room.id === state.room}
                onClick={handleCardClick(room)}
              />
              )
            })
          : 'Loading...'
        }
      </div>
      <div className="page-actions">
        <Link className="button" to="/">
          <i className="left"><FaArrowLeft /></i>
          Back
        </Link>
        {
          state.room
          ? <Link className="button" to="/payment">Confirm selection <FaArrowRight /></Link>
          : ''
        }
      </div>
    </div>
  );
}

export default Rooms;
