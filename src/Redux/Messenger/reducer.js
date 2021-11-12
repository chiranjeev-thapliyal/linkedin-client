import { SEND_MESSAGE_ERROR, SEND_MESSAGE_LOADING, SEND_MESSAGE_SUCCESS } from './actionTypes';

const initState = {
	loading: false,
	messages: [],
	error: false
};

const reducer = (state = initState, {type, payload}) => {
	switch (type) {
		case SEND_MESSAGE_LOADING:
			return { ...state, loading: true };
		case SEND_MESSAGE_SUCCESS:
			return { ...state, messages: [ ...state.messages, payload ] };
		case SEND_MESSAGE_ERROR:
			return {...state, error: true}
		default:
			return { ...state };
	}
}

export default reducer;