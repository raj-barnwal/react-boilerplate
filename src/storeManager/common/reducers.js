import { ACTION } from "./constants";

const initialState = {
  notificationList:[],
  userPermission:[]
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.RESET_STATE: return { ...initialState };
    break;
    case ACTION.SET_USER_PERMISSION: return {
      ...initialState,
      userPermission: action.payload
    }
    default:
      return state;
  }
}
