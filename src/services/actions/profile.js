import { checkReponse } from '../../utils/variables';
import { user } from '../../utils/api';
import { getCookie } from '../../utils/cookies';

export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR';
export const GET_UPDATE_PROFILE_REQUEST = 'GET_UPDATE_PROFILE_REQUEST';
export const GET_UPDATE_PROFILE_SUCCESS = 'GET_UPDATE_PROFILE_SUCCESS';
export const GET_UPDATE_PROFILE_ERR0R = 'GET_UPDATE_PROFILE_ERR0R';

export const getUser = () => (dispatch) => {
    dispatch({ type: GET_PROFILE_REQUEST });
    fetch(user, {
        method: 'GET',
        headers: {
            'Content-Type': "application/json;charset=utf-8",
            'authorization': getCookie('token')
        }
    })
    .then(checkReponse)
    .then(res =>  {
        console.log(res);
        dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: res
        })})
    .catch(err => dispatch({
        type: GET_PROFILE_ERROR,
        payload: err
    }));
}

export const updateUser = (email, username) => (dispatch) => {
    dispatch({ type: GET_UPDATE_PROFILE_REQUEST });
    fetch(user, {
        method: 'PATCH',
        headers: {
            'Content-Type': "application/json;charset=utf-8",
            'authorization': getCookie('token')
        },
        body: JSON.stringify({
            'email': email,
            'name': username
        })
    })
    .then(checkReponse)
    .then(res =>  dispatch({
            type: GET_UPDATE_PROFILE_SUCCESS,
            payload: res
        }))
    .catch(err => dispatch({
        type: GET_UPDATE_PROFILE_ERR0R,
        payload: err
    }));
}