import React from "react";

//AuthContext is a object that contains component
const AuthContext = React.createContext({
    isLoggedIn : false
})

export default AuthContext;