import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Greeting from './Greeting';
//import ItemList  from './Item';
//import UserTable from  './Usertable';

//import ParentComponent from './ParentComponent';
//import Simple from  './Simple';
//import Increament from './Increament';
//import FavouriteColor from './FavouriteColor';
//import Counter from './Counter';
//import LocationDisplay from './LocationDisplay';
import { BrowserRouter } from 'react-router-dom';

//import ControlForm from './Controlform';
//import UnControlFrom from './UnControlForm';
//import RegistrationForm from './RegistrationForm';
//import RegisterForm from './RegisterForm';
//import Parent from './Parent';
//import ParentComponent from './ParentComponent';
//import TestCatch from './TestCatch';
import BMICalculator from './BMICalculator';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  <BrowserRouter>
    
    </ BrowserRouter>
   { /*<ControlForm />
    <UnControlFrom />
    <RegistrationForm />
    <RegisterForm />
    <Parent />
    <ParentComponent />
    <TestCatch />*/}
    <BMICalculator />

    
  
  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
