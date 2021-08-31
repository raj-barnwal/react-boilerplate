import {ACTION} from "./constants";

export const resetReduxState = () => {
    return ({
        type: ACTION.RESET_STATE,
    })
};