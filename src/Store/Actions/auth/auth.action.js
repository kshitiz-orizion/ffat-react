import { toast } from 'react-toastify';

import { setLocalStorage, removeLocalStorage } from '../../../Utils/web-storage';
import axiosService from '../../../Inits/axios';
import history from '../../../Inits/history';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from './auth.actiontype';

export const login = ( {userCredential }) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN_START });
    // replace it with admin login api once complete
    const tokenInfo = await axiosService.post('/users/auth/login/', {mobile:userCredential.phone,password:userCredential.password});
    setLocalStorage('accessToken', tokenInfo.token);
    await dispatch(getCurrentUser(tokenInfo.token));
    history.push('/');
    toast.success('You are successfully logged in.');
  } catch (error) {
    removeLocalStorage('accessToken');
    dispatch({ type: LOGIN_ERROR, payload: error });
    toast.error(error.message);
  }
};
export const register=({userData})=>async (dispatch,getState)=>{
  try{
    await axiosService.post('/users/auth/register/',{mobile:userData.RegisterPhone,password:userData.Registerpassword});
    toast.success('You have been registered');
  }
  catch(error){
    toast.error(error.message);
  }
}

export const GenerateOtp=(user)=> async (dispatch,getState)=>{
  console.log(user);
}
export const getCurrentUser = accessToken => async (dispatch, getState) => {
  try {
    const userInfo = await axiosService.get('/profile');
    dispatch({ type: LOGIN_SUCCESS, payload: { user: userInfo, accessToken } });
    return Promise.resolve(userInfo);
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error });
    return Promise.reject(error);
  }
};

export const removeUser = () => async (dispatch, getState) => {
  removeLocalStorage('accessToken');
  dispatch({ type: LOGOUT_SUCCESS });
};