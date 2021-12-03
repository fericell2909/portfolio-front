import { Actions } from "../../../../core/clases/redux.interface";
import { types } from '../types';

const initialState : any = {
    alertVisible: false, 
    alertColor: '', 
    message: ''
};


export const AlertReducer = (state = initialState, action: Actions) => {
    const { type, payload  } = action;

    switch (type) {
        case types.set_visible_alert:
            state.alertVisible = true;
            state.message = payload.message;
            
            return {
                ...state
            }
            
        case types.set_no_visible_alert:
            state.alertVisible = false;
            return {
                ...state
            }
        default:
            return state;
    }
}