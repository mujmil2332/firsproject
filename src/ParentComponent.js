import React, { createContext, useState } from 'react';

const InfoContext = createContext();

function ChildComponent() {
  const info = React.useContext(InfoContext);
  return <div>{info}</div>;
}

function ParentComponent() {
    const info = "Hello, world!";
    return (
        <InfoContext.Provider value={info}>
            <ChildComponent />
        </InfoContext.Provider>
    );
}
export default ParentComponent;