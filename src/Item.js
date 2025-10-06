import React from "react";

const items = ['tea','Coffee','Milk'];
const ItemList = () => (
    <ul>
        {
            items.map(item => (
                <li key={item}>{item}</li>
            ))
        }
    </ul>
);
export default ItemList;