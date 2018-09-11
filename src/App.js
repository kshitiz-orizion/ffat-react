import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {Router,Route,Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { axiosInterceptor } from './Inits/axios';
import history from './Inits/history';
import store from './Store';

import { getCurrentUser } from './Store/Actions/auth/auth.action';
import { getLocalStorage } from './Utils/web-storage';
import { PrivateRoute, PublicRoute } from './Utils/route';

import LoginContainer from './Container/Login/LoginContainer';
import DashboardContainer from './Container/Dashboard/DashboardContainer';
import Header from './Container/Common/Header'
import PageLoader from './Component/Common/PageLoader';
import './App.css';
axiosInterceptor(store);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            {<Header/>}
            <ToastContainer autoClose={5000} />
            <div style={{marginLeft:"200px"}}>
              <Switch>
                <PublicRoute exact={true} path="/" component={LoginContainer} />
                <PublicRoute exact={true} path="/dashboard" component={DashboardContainer} />
                <Route render={()=><p>Not Found</p>}/>
              </Switch>
             </div>
           </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
