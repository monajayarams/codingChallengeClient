import React from 'react';
import ReactDOM from 'react-dom';
import HomeScreen from './components/HomeScreen.jsx';
import '../styles/style.css'

export default class App extends React.Component {
    render() {
        return (
            <div>
               <div className="container">
                   <HomeScreen />
               </div>
            </div>
        );
    }
}
