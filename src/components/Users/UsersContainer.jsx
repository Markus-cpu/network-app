import React from "react";
import {connect} from "react-redux";
import UsersC from "./UsersC";
import {followAC, unfollowAC, setUsersAC} from "../../Redux/usersPage-reducer";

let mapStateToProps =(state)=> {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps =(dispatch)=> {
    return {
        //функция принимающая usersId
        follow: (usersId)=> {
            dispatch(followAC(usersId))
        },
        unfollow: (usersId)=> {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (users)=> {
            dispatch(setUsersAC(users))
        }
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);
export default UsersContainer;