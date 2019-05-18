import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import LeaseItem from './components/LeaseItem';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import props from 'prop-types';

let store = createStore(rootReducer, applyMiddleware(thunk))

class App extends Component {

  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/"  component={Home} exact />
            <Route path="/leaseItem" render={(routeProps) => (<LeaseItem {...routeProps} {...props} />)}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }

}

export default App;