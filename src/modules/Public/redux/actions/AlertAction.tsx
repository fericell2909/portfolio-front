import { Dispatch } from "redux";
import { types } from "../types";

export const VisibleMessage = (message:any) => async (dispatch : Dispatch<any>, getState : any) =>  {

        dispatch({
            type : types.set_visible_alert,
            payload : {
                message: message
            }
        });          
}

export const NoVisibleAlert =() => async(dispatch : Dispatch<any> ) => {

    dispatch({
        type : types.set_no_visible_alert,
        payload : {
            message: ''
        }
    });

}
