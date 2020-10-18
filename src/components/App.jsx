import React from 'react';
import Content from "./content";
import Tablas from "./tablas";
import Proyecto from "./proyecto";
import Nav from "./nav";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App(){
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Content}/>
                    <Route path="/tablas" component={Tablas}/>
                    <Route path="/varProject" component={Proyecto}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
