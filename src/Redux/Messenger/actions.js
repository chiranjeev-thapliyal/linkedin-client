import { SEND_MESSAGE_LOADING, SEND_MESSAGE_SUCCESS } from './actionTypes';

export const sendMessageLoading = () => {
  return { type: SEND_MESSAGE_LOADING };
};

export const sendMessageSuccess = (payload) => {
  return { type: SEND_MESSAGE_SUCCESS, payload: payload };
};

export const sendMessageError = () => {
  return { type: SEND_MESSAGE_ERROR };
};
