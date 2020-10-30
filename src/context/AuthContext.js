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
            return {
                ...state,
                token: action.payload,
                errorMessage: ''
            }
            
        default: return state;
    };
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
            })
        }
    };
}

const signin = (dispatch) => {
    return ({email, password}) => {

    };
}

const signout = (dispatch) => {
    return () => {

    };
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    {
        token: null,
        errMessage: ''
    }
)