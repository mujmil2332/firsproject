import React from 'react';
 function MyComponent({isLoggedIn}){
    if(isLoggedIn){
        return <h1>Welcome Back! </h1>
    } else {
        return <h1>Please Log in!</h1>

    }
    }

export default MyComponent;
 