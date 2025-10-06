import React from 'react';

//GrandChild Component
function Grandchild(props){
    return<p>{props.message}</p>;

}

//Child Component
function Child(props){
    return(
        <div>
            <h2>Child Component</h2>
            <Grandchild message={props.message}/>
        </div>
    );
}

//Parent Component
function Parent(){
    
        const message='Hello from the Parent';
        return (
            <div>
        <h1>Parent Component</h1>
        <Child message={message}/>
        </div>
    );
}
export default Parent;