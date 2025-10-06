import React from "react";

function UnControlFrom () {
    const inputRef = React.useState();
    const handleSubmit = () => {
        alert(inputRef.current.value);
    };
    return (
        <>
        <input type = "text" ref={inputRef}/>
        <button onClick={handleSubmit}>Submit</button>
        </>
    );
} 
export default UnControlFrom;