import React from "react";
import { VerticalNavbar } from './contents/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component{
    render(){
        return (
        <BrowserRouter>
            <VerticalNavbar/>
         </BrowserRouter>
        );
      }
}

export default App;