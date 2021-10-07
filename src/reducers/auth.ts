import {

      USER_LOGIN,
      USER_LOAD_ERROR,
      USER_LOADED,
      LOGOUT,
      REGISTER_ERROR,
      LOGIN_ERROR,
      AUTH_ERROR
     } from '../actions/actionTypes';


interface Message {
isAuthenticated: boolean,
loading: boolean,
user: object
}
    
 const initialState: Message = {
    isAuthenticated: null,
    loading: true,
    user: null
 }
 
 export const  auth = (state= initialState, action: any) =>  {
    const { type, payload } = action;
    switch(type) {
        
          case USER_LOADED:
            return {
                  ...state,
                  isAuthenticated: true,
                  loading: false,
                  user: payload
            }
          case USER_LOGIN:
                return {
                      ...state,
                      isAuthenticated: true,
                      loading: false,
                      user: payload
                }
          case AUTH_ERROR:
          case REGISTER_ERROR:
          case LOGIN_ERROR:
          case USER_LOAD_ERROR:
          case LOGOUT:
                return {
                   ...state,
                   isAuthenticated: false,
                   loading: false
                }
            
 
          default:
          return state;
    }
 }