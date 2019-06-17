export const Types = {
  LOGIN_REQUEST: 'users/LOGIN_REQUEST',
  LOGIN_FAILURE: 'users/LOGIN_FAILURE',
  LOGIN_SUCCESS: 'users/LOGIN_SUCCESS',
};

const initialState = {
  login: {
    error: null,
    success: null,
    loading: false,
  },
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, login: { ...state.login, loading: true } };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        login: { ...state.login, loading: false, success: action.payload.success },
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          error: action.payload.error,
          success: false,
        },
      };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: callback => ({
    type: Types.LOGIN_REQUEST,
    payload: { callback },
  }),
  loginSuccess: success => ({
    type: Types.LOGIN_SUCCESS,
    payload: { success },
  }),
  loginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    payload: { error },
  }),
};
