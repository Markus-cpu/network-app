import userPhoto from '../assets/images/avatar.jpg';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let inintialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    img: userPhoto
};
const authReducer =(state = inintialState, action) => {

    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
};
export const setAuthUserData = (id, email, login)=> ({type: SET_AUTH_USER_DATA, data: {id, email, login}});
export default authReducer;