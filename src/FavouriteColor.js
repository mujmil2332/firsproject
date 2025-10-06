import { useState } from "react";

function FavouriteColor(){
    const[color,setColor] = useState("red"); 

    return(
        <>
        <h1>My favourite color is {color}</h1>
        <button onClick={() =>setColor("Black")}>Black</button>
        </>

    )
}
export default FavouriteColor;