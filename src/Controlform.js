import React from "react";

function ControlForm() {
    const [value, setValue] = React.useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return <input type ="text" value={value} onChange={handleChange}/> 
}
export default ControlForm;