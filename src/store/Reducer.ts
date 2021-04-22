import React from 'react';

export interface StateContext {
  startDate: string | null
  endDate: string | null
  room: number | undefined
}

type Action = {
  type: string
  payload: any
}

export interface Store {
  state: StateContext
  dispatch: React.Dispatch<Action>
}

export const initialState: StateContext = {
  startDate: null,
  endDate: null,
  room: undefined,
};

export const ACTION = {
  SET_START_DATE: 'SET_START_DATE',
  SET_END_DATE: 'SET_END_DATE',
  SET_ROOM: 'SET_ROOM',
};

export const Reducer = (state: StateContext, action: Action) => {
  switch (action.type) {
      case ACTION.SET_START_DATE:
          return {
              ...state,
              startDate: action.payload,
          };
      case ACTION.SET_END_DATE:
          return {
              ...state,
              endDate: action.payload,
          };
      case ACTION.SET_ROOM:
          return {
              ...state,
              room: action.payload,
          };
      default:
          return state;
  }
};

export default Reducer;