

import { 
      USER_LOGIN,
       LOGOUT,
       USER_LOADED,
       LOGIN_ERROR,
       USER_LOAD_ERROR

      } from './actionTypes';


// Load User

export const loadUser = (authUser: any) => async (dispatch: any) => {
    
        try {
   
          dispatch({
            type: USER_LOADED,
            payload: authUser
          });
        } catch (err) {
            dispatch({
                  type: USER_LOAD_ERROR
            });
        }
      
    };

    
export const loginAction = (authUser: any) => async (dispatch: any) => {
    
      try {
      
        dispatch({
          type: USER_LOGIN,
          payload: authUser
        });
      } catch (err) {
          dispatch({
                type: LOGIN_ERROR
          });
      }
    
  };

//Register User

// interface RegisterUser {
//       name?: string,
//       email?: string,
//       password?: string
// }


// Logout // user
export const logoutAction = () => async (dispatch:any) => {
      // dispatch({
      //       type: CLEAR_PROFILE
      // })
      // removeCookie(cookieName)
      try {
      //    const res = await axios.get(`/api/v1/auth/signout`);
          
            dispatch({
                  type: LOGOUT
            });
      
        
      } catch (error) {
            
      }
}
