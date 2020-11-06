import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';

const authReducer = ( state, action) => {
    switch( action.type )
    {
        case 'add_error':
            return {
                ...state,
                errorMessage: action.payload
            };
        case 'signup':
        case 'signin':
            return {
                ...state,
                token: action.payload,
                errorMessage: ''
            };

        case 'clear_error_message':
            return {
                ...state,
                errorMessage: ''
            }

        default: return state;
    };
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message'});
};

const signup = (dispatch) => {
    return async ({email, password}) => {
        try{
            const response = await trackerApi.post('/signup' , { email , password });
            const token = response.data.token;

            await AsyncStorage.setItem( 'token', token);
            dispatch({
                type: 'signup',
                payload: token
            });

            navigate('TrackList');


        } catch(err){
            dispatch({
                type: 'add_error',
                payload: err.message
            });
        }
    };
};

const signin = (dispatch) => {
    return async ({email, password}) => {
        try{
            const response = await trackerApi.post('/signin' , { email , password });
            const token = response.data.token;

            await AsyncStorage.setItem( 'token', token);
            dispatch({
                type: 'signin',
                payload: token
            });

            navigate('TrackList');


        } catch(err){
            dispatch({
                type: 'add_error',
                payload: err.message
            });
        }
    };
}

const tryLocalSignin = dispatch = async () => {
    const token = await AsyncStorage.getItem('token');

    if(token){
        dispatch({
            type: 'signin', payload: token
        });
        navigate('TrackList');
    } else {
        navigage('singup');
    }
}

const signout = (dispatch) => {
    return () => {

    };
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin },
    {
        token: null,
        errMessage: ''
    }
)