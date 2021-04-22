import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import { Link } from "react-router-dom";
import { useStoreContext } from 'store/Store';
import { ACTION } from 'store/Reducer';
import './Duration.css';

type DateState = moment.Moment | null

function Duration() {
  const { state, dispatch } = useStoreContext();
  const [startDate, setStartDate] = useState<DateState>(null);
  const [endDate, setEndDate] = useState<DateState>(null);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  function onDatesChange({ startDate, endDate }) {
    if (startDate) {
      const newStartDate = moment(startDate);
      setStartDate(newStartDate);
      dispatch({ type: ACTION.SET_START_DATE, payload: newStartDate.format("YYYY-MM-DD") });
    }

    if (endDate) {
      const newEndDate = moment(endDate);
      setEndDate(newEndDate);
      dispatch({ type: ACTION.SET_END_DATE, payload: newEndDate.format("YYYY-MM-DD") });
    }
  }

  function onFocusChange(focusedInput: string) {
    setFocusedInput(focusedInput);
  }

  return (
    <div className="page">
      <h1>Choose when to stay with us</h1>
      <div className="date-range-picker">
        <DateRangePicker
          startDate={startDate}
          startDateId="your_unique_start_date_id"
          endDate={endDate}
          endDateId="your_unique_end_date_id"
          onDatesChange={onDatesChange}
          focusedInput={focusedInput}
          onFocusChange={onFocusChange}
          startDatePlaceholderText={'Arrival'}
          endDatePlaceholderText={'Departure'}
        />
      </div>

      <div className="page-actions">
        {
          (state.startDate && state.endDate)
          ? <Link className="button" to="/rooms">Find a suitable room</Link>
          : ''
        }
      </div>
    </div>
  );
}

export default Duration;
